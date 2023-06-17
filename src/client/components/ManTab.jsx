import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import Nav from 'react-bootstrap/Nav';

function ManTab() {
  return (
    <Nav variant="pills" defaultActiveKey="event" className='d-flex flex-row'>
      <Nav.Item>
        <Nav.Link href="/management" eventKey="event">Event</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/management/routine" eventKey="routine">Routine</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/management/todo" eventKey="todo">Todo</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default ManTab;