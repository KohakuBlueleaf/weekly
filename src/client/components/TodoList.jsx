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
import {getToday} from '../utils/index';
import {TbMinusVertical} from "react-icons/tb";
import { modifyTodo as modifyTodoFromApi } from '../api/todo';
import {endListTags} from '../store/tags/action';
import { listTags } from '../api/tag';
import { brightness } from '../utils/index';

import "../style/todoList.css";

async function getTodoList(date, login, completed) {
  return await listTodos(date, login, completed); 
}
async function getTagsList(login) {
  return await listTags(login);
}


function getTagById(tags, id) {
  tags = [];
  tags.forEach(element => {
    if(element.id === id) return element;
  });
}

const TodoList = () => {
  const loginStatus = useSelector((state) => state.user.token);
  const [user, authStatus] = useOutletContext();
  const dispatch = useDispatch();

  //
  const listTodos = useSelector((state) => state.todo.todo);
  const listTags = useSelector((state) => state.tags.tags);
  const completedShowFilter = useSelector((state) => state.todo.completedShowFilter);

  console.log('init todo is:', listTodos);

  let todoData = [];
  let tagData = [];
  let tag;

  useEffect(() => {
    console.log('get todos', listTodos, loginStatus);
    if(authStatus === 'configuring') return;
    if(authStatus === 'authenticated' && !loginStatus) return;
    (async()=> {
      todoData = await getTodoList(getToday(), loginStatus, completedShowFilter);
      dispatch(endListTodos(todoData));
      tagData = await getTagsList(loginStatus);
      dispatch(endListTags(tagData));
      console.log("tododata is", todoData);
    })();
  }, [loginStatus, authStatus]);

  
  return (
    <ListGroup vertical="true">
      {listTodos.map(t=>{
      console.log(t)
        return(
          <ListGroup.Item className='d-flex flex-row justify-content-between' key={'todo-list-'+t.id}>
          <div className='d-flex flex-column w-100'>
            <div className='d-flex flex-row' >
              <TbMinusVertical color="#BE6464" className='todo-color'/>
              <Form.Check
                  className='lgcheckbox-todo d-flex flex-row'
                  type={'checkbox'}
                  id={`default-checkbox`}
                  defaultChecked={t.completed ? true : false}
                  label={`${t.title}`}
                  onClick={() => {modifyTodoFromApi(t, loginStatus)}}
              />
              <FaEquals color="#BE6464" className='equal-icon'></FaEquals>
            </div>
            <div className='flex-shrink-1 d-flex'>
            {
              listTags.map(tags=>{
                let tag = undefined;
                t.tags.every(targetTag=>{
                  console.log(t, targetTag)
                  if(tags.id == targetTag){
                    console.log(t, targetTag)
                    tag = tags;
                    return false
                  }
                  return true;
                })
                if(tag){
                  return (
                  <div 
                    key={'event-' + t.id + '-' + tag.id}
                    style={{
                      backgroundColor: tag.color,
                      color: brightness(tag.color || '#17385B')>127 ? 'black': 'white',
                    }}
                    className='border rounded ps-2 pe-2'>
                    {tag.title}
                  </div>
                  )
                }
              })
            }
            </div>
          </div>
          </ListGroup.Item>
        )
      })}       
    </ListGroup>
  );
}

export default TodoList;