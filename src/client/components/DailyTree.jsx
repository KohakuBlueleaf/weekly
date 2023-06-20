import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";
import { listEvents as listEventsFromApi } from '../api/event';
import { getPageDate, getToday } from '../utils';
import { endListEventAll } from '../store/event/action';

import '../style/dailytree.css';

async function getEventList(PageDate, login) {
    let filter = {
      eventDisplay: true,
      routineDisplay: true,
      completedDisplay: false,
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
    const [data, setData] = React.useState([]);

    useEffect(() => {
        console.log('get eventList', listEvents, loginStatus);
        if(authStatus === 'configuring') return;
        if(authStatus === 'authenticated' && !loginStatus) return;
        (async()=> {
          eventData = await getEventList(getPageDate(), loginStatus);
          dispatch(endListEventAll(eventData));
          console.log("event_all_data is", eventData);
          setData(eventData)
        })();
    },[loginStatus, authStatus]);
    
    console.log(data[getToday().week])
    return (
        <div className='d-flex flex-column h-100 w-100 align-items-center'>
            <div className='d-flex flex-row row w-100'>
                <div className='col-6 text-center'>
                    Routine
                </div>
                <div className='col-6 text-center'>
                    Event
                </div>
            </div>
            {
                data[getToday().week]?.map((e, index) => {
                    console.log(e, index)
                    return (
                        <div key={e.id} className='d-flex flex-row row w-100'>
                            <div className={'col-6 text-center ' + (e.type==='routine' ? 'routine-tree-item' : '')}>
                                <span>{e.type === 'routine' ? (e.title?e.title:'routine') : ''}</span>
                            </div>
                            <div className={'col-6 text-center ' + (e.type==='event' ? 'event-tree-item' : '')}>
                                <span>{e.type === 'event' ? (e.title?e.title:'event') : ''}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    ) 
}

export default DailyTree;