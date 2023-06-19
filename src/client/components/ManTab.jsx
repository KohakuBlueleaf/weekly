import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { toEvent, toRoutine, toTodo } from '../store/event/action';

import Nav from 'react-bootstrap/Nav';

import "../style/navbar.css";

function ManTab() {
  const dispatch = useDispatch();

  const {
    curpage,
  } = useSelector((state) => ({
    curpage: state.event.curpage,
  }));

  return (
    <Nav variant="pills" className='d-flex flex-row'>
      <Nav.Item>
        <Link className={`nav-link man-tab-button ${curpage === 'event' ? 'active man-tab-button-selected' : ''}`} to='/management' onClick={() => dispatch(toEvent())}>Event</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className={`nav-link man-tab-button ${curpage === 'routine' ? 'active man-tab-button-selected' : ''}`} to='/management/routine' onClick={() => dispatch(toRoutine())}>Routine</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className={`nav-link man-tab-button ${curpage === 'todo' ? 'active man-tab-button-selected' : ''}`} to='/management/todo' onClick={() => dispatch(toTodo())}>Todo</Link>
      </Nav.Item>
    </Nav>
  );
}

export default ManTab;