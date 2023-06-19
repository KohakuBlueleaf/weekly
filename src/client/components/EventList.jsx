import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useOutletContext } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import {TbMinusVertical} from "react-icons/tb";
import {FaEquals} from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

import { listEvents as listEventsFromApi } from '../api/event';
import getPageDate from '../utils/index';


async function getEventList(PageDate, login) {
  let filter = {
    eventDisplay: true,
    routineDisplay: false,
    completedDisplay: true,
    tags: ''
  }
  return await listEventsFromApi(PageDate, login, filter);
}



const EventList = () => {
  const loginStatus = useSelector((state) => state.user.token);
  const [user, authStatus] = useOutletContext();
  const dispatch = useDispatch();
  
  //填空
  //const listEvents = useSelector((state) => state.?)


  let eventData = [];

  useEffect(() => {
    console.log('get eventList', listEvents, loginStatus);
    if(authStatus === 'configuring') return;
    if(authStatus === 'authenticated' && !loginStatus) return;
    (async()=> {
      eventData = await getEventList(getPageDate(), login);
      //填空sth
      dispatch(sth(eventData));
      console.log("eventdata is", eventData);
    })();
  },[loginStatus, authStatus]);


  return (
    <ListGroup vertical="true">
      {listEvents.map(e => {
        return(
          <ListGroup.Item className='d-flex flex-row justify-content-between'><a><TbMinusVertical color="#BE6464"></TbMinusVertical>{e.title}</a><FaEquals color="#BE6464"></FaEquals></ListGroup.Item>
        )
      })}
                
    </ListGroup>
  );
}

export default EventList;