import React from 'react';

import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {boxicons} from 'boxicons';
import {FaEquals, FaCircle} from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { from } from 'webpack-sources/lib/CompatSource';
function TagList() {
  return (
    <ListGroup vertical>
        
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a><FaCircle color="#BE6464"></FaCircle>tag1</a><FaEquals color="#BE6464"></FaEquals></ListGroup.Item>
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a><FaCircle color="#BE6464"></FaCircle>tag2</a><FaEquals></FaEquals></ListGroup.Item>
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a><FaCircle color="#BE6464"></FaCircle>tag3</a><FaEquals></FaEquals></ListGroup.Item>
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a><FaCircle color="#BE6464"></FaCircle>tag4</a><FaEquals></FaEquals></ListGroup.Item>
                
    </ListGroup>
  );
}

export default TagList;