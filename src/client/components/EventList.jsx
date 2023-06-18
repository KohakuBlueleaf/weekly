import React from 'react';

import { v4 as uuid } from 'uuid';
import {FaEquals, FaGripLinesVertical} from 'react-icons/fa';
import {TbMinusVertical} from "react-icons/tb";
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import {listEvents as listEventsFromApi, createEvent as createEventfromApi} from '../api/event.js'

function createEvent() {
  return createEventfromApi({
    id: uuid(),
    type: 'event',              //string
    title: 'title',             //string
    year: 2023,            //number
    month: 6,              //number
    day: 18,               //number
    week: 0,                    //number
    timeStart: 3,               //number, 0~47, 奇數為半小
    timeEnd: 8,                 //number, 1~48, 奇數為半小
    tags: ['eventData.tags'],               //array[obj, obj, ...]
    location: 'eventData.location'        //string
});
}


const EventList = () => {
  createEvent();
  return (
    <ListGroup vertical="true">
        
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a><TbMinusVertical color="#BE6464"></TbMinusVertical>event1</a><FaEquals color="#BE6464"></FaEquals></ListGroup.Item>
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a><TbMinusVertical color="#BE6464"></TbMinusVertical>event2</a><FaEquals></FaEquals></ListGroup.Item>
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a><TbMinusVertical color="#BE6464"></TbMinusVertical>event3</a><FaEquals></FaEquals></ListGroup.Item>
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a><TbMinusVertical color="#BE6464"></TbMinusVertical>event4</a><FaEquals></FaEquals></ListGroup.Item>
                
    </ListGroup>
  );
}

export default EventList;