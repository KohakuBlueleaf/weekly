import React from 'react';

import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {FaEquals} from 'react-icons/fa';
import {BsCircle} from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
function TodoList() {
  return (
    <ListGroup vertical>
        
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a>todo1</a><FaEquals color="#BE6464"></FaEquals></ListGroup.Item>
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a>todo2</a><FaEquals></FaEquals></ListGroup.Item>
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a>todo3</a><FaEquals></FaEquals></ListGroup.Item>
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a>todo4</a><FaEquals></FaEquals></ListGroup.Item>
                
    </ListGroup>
  );
}

export default TodoList;