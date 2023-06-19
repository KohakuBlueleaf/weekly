import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useOutletContext } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import {TbMinusVertical} from "react-icons/tb";
import {FaEquals} from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

import { listEvents as listEventsFromApi } from '../api/event';
import { getPageDate, getToday } from '../utils/index';
import { endListEventAll } from '../store/event/action';
import { Container } from 'react-bootstrap';
import {getTagById} from '../api/tag'

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
  
  const listEvents = useSelector((state) => state.event.event_all)
  let eventData = [];

  useEffect(() => {
    console.log('get eventList', listEvents, loginStatus);
    if(authStatus === 'configuring') return;
    if(authStatus === 'authenticated' && !loginStatus) return;
    (async()=> {
      eventData = await getEventList(getToday(), loginStatus);
      dispatch(endListEventAll(eventData));
      console.log("eventdata is", eventData);
    })();
  },[loginStatus, authStatus]);


  return (
    <ListGroup vertical="true">
      {listEvents.map(e => {
        return(
          <ListGroup.Item className='d-flex flex-row justify-content-between'>
            <div>
              <div><TbMinusVertical color="#BE6464"></TbMinusVertical>{e.title}</div>
              <div className='d-flex flex-row'>{e.month}/{e.day}&nbsp;{e.timeStart/2}:{e.timeStart%2? `30`:`00`}-{e.timeEnd/2}:{EventList.timeEnd%2?`30`:`00`}
              {/* {getTagById(e.tags[0], loginStatus).title} */}
              </div>
            </div>
            <FaEquals color="#BE6464"></FaEquals>
          </ListGroup.Item>
        )

      })}

    </ListGroup>
  );
}

export default EventList;