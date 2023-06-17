import React from 'react';

import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {FaEquals, FaGripLinesVertical} from 'react-icons/fa';
import {TbMinusVertical} from "react-icons/tb";
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
function EventList() {
  return (
    <ListGroup vertical>
        
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a><TbMinusVertical color="#BE6464"></TbMinusVertical>event1</a><FaEquals color="#BE6464"></FaEquals></ListGroup.Item>
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a><TbMinusVertical color="#BE6464"></TbMinusVertical>event2</a><FaEquals></FaEquals></ListGroup.Item>
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a><TbMinusVertical color="#BE6464"></TbMinusVertical>event3</a><FaEquals></FaEquals></ListGroup.Item>
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a><TbMinusVertical color="#BE6464"></TbMinusVertical>event4</a><FaEquals></FaEquals></ListGroup.Item>
                
    </ListGroup>
  );
}

export default EventList;