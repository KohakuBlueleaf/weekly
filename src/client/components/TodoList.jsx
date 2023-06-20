import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useOutletContext } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import {FaEquals} from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

import {endListTodos} from '../store/todo/action'
import { listTodos } from '../api/todo';
import getToday from '../utils/index';
import {TbMinusVertical} from "react-icons/tb";

import "../style/todoList.css";

async function getTodoList(login, date, completed) {
  return await listTodos(login, date, completed); 
}

const TodoList = () => {
  const loginStatus = useSelector((state) => state.user.token);
  const [user, authStatus] = useOutletContext();
  const dispatch = useDispatch();

  //
  const listTodos = useSelector((state) => state.todo.todo);
  console.log('init todo is:', listTodos);

  let todoData = [];

  useEffect(() => {
    console.log('get todos', listTodos, loginStatus);
    if(authStatus === 'configuring') return;
    if(authStatus === 'authenticated' && !loginStatus) return;
    (async()=> {
      todoData = await getTodoList(loginStatus);
      dispatch(endListTodos(todoData));
      console.log("tododata is", todoData);
    })();
  }, [loginStatus, authStatus]);


  return (
    <ListGroup vertical="true">
      {listTodos.map(t=>{
        return(
          <ListGroup.Item className='d-flex flex-row'>
          <TbMinusVertical color="#BE6464" className='todo-color'/>
          <Form.Check
              className='lgcheckbox-todo d-flex flex-row'
              type={'checkbox'}
              id={`default-checkbox`}
              defaultChecked={t.completed ? true : false}
              label={`${t.title}`}
              onClick={() => {}}
          />
          <FaEquals color="#BE6464" className='equal-icon'></FaEquals>
          </ListGroup.Item>
        )
      })}       
    </ListGroup>
  );
}

export default TodoList;