import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import Nav from 'react-bootstrap/Nav';
import ManTab from '../components/ManTab';
import TodoList from '../components/TodoList';
import TodoFilterModal from '../components/TodoFilterModal';
import TodoAddModal from '../components/TodoAddModal';

function Todo() {
  return (
    <div>
      <TodoList></TodoList>
      <TodoAddModal/>
      <TodoFilterModal/>
    </div>
  )
}

export default Todo;