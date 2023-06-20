import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext } from "react-router-dom";
import {TbMinusVertical} from "react-icons/tb";
import {FaEquals} from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

import { listEvents as listEventsFromApi } from '../api/event';
import { getToday } from '../utils/index';
import { endListEventAll } from '../store/event/action';
import {endListTags} from '../store/tags/action';
import { listTags } from '../api/tag';
import { brightness } from '../utils/index';


async function getEventList(PageDate, login) {
  let filter = {
    eventDisplay: true,
    routineDisplay: false,
    completedDisplay: true,
    tags: ''
  }
  return await listEventsFromApi(PageDate, login, filter);
}
async function getTagsList(login) {
  return await listTags(login);
}


const EventList = () => {
  const loginStatus = useSelector((state) => state.user.token);
  const [user, authStatus] = useOutletContext();
  const dispatch = useDispatch();
  
  const listEvents = useSelector((state) => state.event.event_all);
  const listTags = useSelector((state) => state.tags.tags);
  let eventData = [];
  let allEvents = [];
  let tagData = [];
  
  listEvents.forEach((e_list) => {
    if(e_list.forEach){
      e_list.forEach((e) => {
        allEvents.push(e);
      })
    }else{
      allEvents.push(e_list)
    }
  })

  useEffect(() => {
    console.log('get eventList', listEvents, loginStatus);
    if(authStatus === 'configuring') return;
    if(authStatus === 'authenticated' && !loginStatus) return;
    (async()=> {
      eventData = await getEventList(getToday(), loginStatus);
      dispatch(endListEventAll(eventData));
      tagData = await getTagsList(loginStatus);
      dispatch(endListTags(tagData));
      console.log("eventdata is", eventData);
    })();
  },[loginStatus, authStatus]);

  return (
    <ListGroup vertical="true">
      {allEvents.map(e => {
        return(
          <ListGroup.Item key={'event-list-'+e.id} className='d-flex flex-row justify-content-between'>
            <div className='d-flex flex-column w-100'>
              <div><TbMinusVertical color="#BE6464"></TbMinusVertical>{e.title}</div>
              <div className='d-flex flex-row'>{e.month}/{e.day}&nbsp;{e.timeStart/2}:{e.timeStart%2? `30`:`00`}-{e.timeEnd/2}:{EventList.timeEnd%2?`30`:`00`}

              </div>
              <div className='flex-shrink-1 d-flex'>
              {
                listTags.map(t=>{
                  let tag = undefined;
                  e.tags.every(targetTag=>{
                    console.log(t, targetTag)
                    if(t.id == targetTag){
                      console.log(t, targetTag)
                      tag = t;
                      return false
                    }
                    return true;
                  })
                  if(tag){
                    console.log(brightness(tag.color || '#17385B'))
                    return (
                    <div 
                      key={'event-' + e.id + '-' + tag.id}
                      style={{
                        backgroundColor: tag.color,
                        color: brightness(tag.color || '#17385B')>127 ? 'black': 'white',
                      }}
                      className='border rounded ps-2 pe-2'>
                      {tag.title}
                    </div>
                    )
                  }
                })
              }
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