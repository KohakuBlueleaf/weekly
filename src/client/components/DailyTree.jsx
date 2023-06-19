import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";
import { listEvents as listEventsFromApi } from '../api/event';
import { getPageDate, getToday } from '../utils';
import { endListEventAll } from '../store/event/action';

async function getEventList(PageDate, login) {
    let filter = {
      eventDisplay: true,
      routineDisplay: false,
      completedDisplay: true,
      tags: ''
    }
    return await listEventsFromApi(PageDate, login, filter);
}

const DailyTree = () => {
    const dispatch = useDispatch();

    const loginStatus = useSelector((state) => state.user.token);
    const [user, authStatus] = useOutletContext();
    const listEvents = useSelector((state) => state.addModal.event);

    let eventData = [];

    useEffect(() => {
        console.log('get eventList', listEvents, loginStatus);
        if(authStatus === 'configuring') return;
        if(authStatus === 'authenticated' && !loginStatus) return;
        (async()=> {
          eventData = await getEventList(getPageDate(), loginStatus);
          dispatch(endListEventAll(eventData));
          console.log("event_all_data is", eventData);
        })();
    },[loginStatus, authStatus]);
    
    return (
        <div className='d-flex flex-column'>
            <div className='d-flex flex-row'>
                <div className='col-6 text-center'>
                    Routine
                </div>
                <div className='col-6 text-center'>
                    Event
                </div>
            </div>
            {
                listEvents.map((item, index) => {
                    if (index === getToday().week) {
                        console.log("list events", item);
                        return item.map((e, i) => {
                            return (
                                <div key={e.id} className='d-flex flex-row'>
                                    <div className='routine-item'>
                                        {e.type === 'routine' ? `${e.title}` : ''}
                                    </div>
                                    <div className='daily-tree-middle'></div>
                                    <div className='event-item'>
                                        {e.type === 'event' ? `${e.title}` : ''}
                                    </div>
                                </div>
                            )
                        })
                    }
                })
            }
        </div>
    ) 
}

export default DailyTree;