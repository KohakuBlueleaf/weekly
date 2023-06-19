import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useOutletContext } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

import {FaEquals} from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

import endListTodos from '../store/todo/action'
import { listTodos } from '../api/todo';

async function getTagsList(login, date, completed) {
  let all_todos = await listTodos(login, date, completed); 


}

const TodoList = () => {
  const loginStatus = useSelector((state) => state.user.token);
  const [user, authStatus] = useOutletContext();
  const dispatch = useDispatch();

  //
  const listTodos = useSelector((state) => state.todo.todo);
  console.log('init todo is:', listTodos);

  let todoData = [];

  // useEffect(() => {
  //   console.log('get todos', listTodos, loginStatus);
  //   if(authStatus === 'configuring') return;
  //   (async()=> {
  //     todoData = await 
  //   })
  // })


  return (
    <ListGroup vertical="true">
        
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a>todo1</a><FaEquals color="#BE6464"></FaEquals></ListGroup.Item>
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a>todo2</a><FaEquals></FaEquals></ListGroup.Item>
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a>todo3</a><FaEquals></FaEquals></ListGroup.Item>
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a>todo4</a><FaEquals></FaEquals></ListGroup.Item>
                
    </ListGroup>
  );
}

export default TodoList;