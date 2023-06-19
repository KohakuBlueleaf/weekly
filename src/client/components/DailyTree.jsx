import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";
import { listEvents as listEventsFromApi } from '../api/event';
import { getPageDate } from '../utils';
import { endListEvents } from '../store/posts/action';

const DailyTree = () => {
    const dispatch = useDispatch();

    const loginStatus = useSelector((state) => state.user.token);
    const [user, authStatus] = useOutletContext();
    const listEvents = useSelector((state) => state.addModal.event);

    useEffect(() => {
        (async () => {
            let temp;
            temp = await listEventsFromApi(getPageDate(), loginStatus);
            dispatch(endListEvents(temp));
            // console.log("temp: askldhjklasdhklasdhklhasdsd", temp);
            // console.log('get events', listEvents);
        })
    }, [listEvents, loginStatus])
    
    console.log("events: ~~~~~~~~~~~~~~~~~", listEvents[2]);
    return (
        //插入圖片(routine/events/樹幹)
        <div className='container d-flex flex-column'>
            {
                listEvents.map((item, index) => {
                    <div key={item.id} className='d-flex flex-row'>
                        <div className='col-6'>
                            {item.type === 'routine' ? `${item.title}` : ''}
                        </div>
                        <div className='col-6'>
                            {item.type === 'event' ? `${item.title}` : ''}
                        </div>
                    </div>
                })
            }
        </div>    
        
    ) 
}

export default DailyTree;