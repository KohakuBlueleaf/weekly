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
        <div className='d-flex flex-column h-100 w-100 align-items-center'
            style={{
                backgroundImage: 'url("/img/daily.png")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
            }}
        >
            <div className='d-flex flex-row row w-100 align-items-center justify-content-center'>
                <div className='col-6 text-center'
                style={{
                    backgroundImage: 'url("/img/routine_title.png")',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '10rem'
                }}>
                </div>
                <div className='col-6 text-center'
                style={{
                    backgroundImage: 'url("/img/event_title.png")',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '10rem'
                }}>
                </div>
            </div>
            {
                data[getToday().week]?.map((e, index) => {
                    console.log(e, index)
                    return (
                        <div key={e.id} className='d-flex flex-row row w-100'>
                            <div 
                                className={'col-6 text-center d-flex flex-column align-items-end'}
                                style={{padding: '0'}}
                            >
                                <div
                                className={'d-flex text-center align-items-center justify-content-center'}
                                style={e.type==='routine' ?{
                                    backgroundImage: 'url("/img/left.png")',
                                    backgroundPosition: 'right',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    height: '2.5rem',
                                    width: 'calc(100% - 5rem)',
                                    fontSize: '1.2rem'
                                }:{}}>
                                    <span>{e.type === 'routine' ? (e.title?e.title:'routine') : ''}</span>
                                </div>
                            </div>
                            <div 
                                className={'col-6 text-center d-flex flex-column align-items-start'}
                                style={{padding: '0'}}
                            >
                                <div
                                className={'d-flex text-center align-items-center justify-content-center'}
                                style={e.type==='event' ?{
                                    backgroundImage: 'url("/img/right.png")',
                                    backgroundPosition: 'left',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    height: '2.5rem',
                                    width: 'calc(100% - 5rem)',
                                    fontSize: '1.2rem'
                                }:{}}>
                                    <span>{e.type === 'event' ? (e.title?e.title:'event') : ''}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    ) 
}

export default DailyTree;