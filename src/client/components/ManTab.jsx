import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { toEvent, toRoutine, toTodo } from '../store/management/action';

import Nav from 'react-bootstrap/Nav';

function ManTab() {
  const dispatch = useDispatch();

  const {
    curpage,
  } = useSelector((state) => ({
    curpage: state.management.curpage,
  }));

  return (
    <Nav variant="pills" className='d-flex flex-row'>
      <Nav.Item>
        <Link className={`nav-link ${curpage === 'event' ? 'active' : ''}`} to='/management' onClick={() => dispatch(toEvent())}>Event</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className={`nav-link ${curpage === 'routine' ? 'active' : ''}`} to='/management/routine' onClick={() => dispatch(toRoutine())}>Routine</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className={`nav-link ${curpage === 'todo' ? 'active' : ''}`} to='/management/todo' onClick={() => dispatch(toTodo())}>Todo</Link>
      </Nav.Item>
    </Nav>
  );
}

export default ManTab;