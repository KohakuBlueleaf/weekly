import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";
import TimeLineItem from './TimeLineItem';
import TimeLineMonth from './TimeLineMonth';
import TimeLineTitle from './TimeLineTitle';
import { listEvents } from '../api/event';
import '../style/TimeLine.css'
import RoutineTimeLineModal from './RoutineTimeLineModal';
import RoutineTimeLineItem from './RoutineTimeLineItem';
import { getPageDate } from '../utils';
import { endListRoutines } from '../store/routine/action';

import {endListTags} from '../store/tags/action';
import { listTags } from '../api/tag';


async function getPageRoutine(PageDate, login, filter) {
  return await listEvents(PageDate, login, filter);
}
async function getTagsList(login) {
  return await listTags(login);
}

function pushPageData(PageData, data) {
  console.log('this is',PageData);
  if(!PageData || !PageData[0]) return
  
  for(let j=0; j<7; j++) {
    PageData[j].map(element => {
      if(element.timeStart<0 || element.timeEnd>47 || element.timeEnd<=element.timeStart){
        return
      }
      for(let k=element.timeStart+1; k<element.timeEnd; k++) {
        if(data[j][k].title === 'non') return;
        data[j][k] = {
          id: 'uuid()',
          type: 'empty',               //string
          title: 'non',             //string
          year: -1,               //number
          month: -1,             //number
          day: -1,            //number
          week: -1,               //number
          timeStart: k,     //number, 0~47, 奇數為半小
          timeEnd: k,         //number, 0~47, 奇數為半小
          tags: [],               //array
          location: 'location'        //string
        }
      }
      if(data[j][element.timeStart].title === 'non') return;
      data[j][element.timeStart] = element;
    })
  }
}

import "../style/TimeLine.css"

const TimeLineRoutine = () => {
  const loginStatus = useSelector((state) => state.user.token);
  const [user, authStatus] = useOutletContext();
  const dispatch = useDispatch();
  
  const listRoutines = useSelector((state) => state.routine.routine);
  const listTags = useSelector((state) => state.tags.tags);
  let tagData = [];
  
  let data = [];
  for(let j=0; j<7; j++){
    data.push([]);
    for(let i=0; i<48; i++){
      data[j].push({
        id: 'uuid()',
        type: 'empty',               //string
        title: i,             //string
        year: -1,               //number
        month: -1,             //number
        day: -1,            //number
        week: -1,               //number
        timeStart: i,     //number, 0~47, 奇數為半小
        timeEnd: i+1,         //number, 0~47, 奇數為半小
        tags: [],               //array
        location: 'location'        //string
      })
    }
  }
  const PageDate = getPageDate();
  let PageData = [];
  
  let timestamp = [];
  for(let i=0; i<48; i++){
    //先用半個小時為單位，好開發
    if(i%2) timestamp.push('')
    else timestamp.push(i/2 + '.');
    // timestamp.push(i + ':30');
  }

  useEffect(()=>{
    console.log('get routines', listRoutines);
    if(authStatus === 'configuring') return;
    if(authStatus === 'authenticated' && !loginStatus) return;
    (async()=>{
      PageData = await getPageRoutine(getPageDate(), loginStatus, {
        eventDisplay: false,
        routineDisplay: true,
      });
      dispatch(endListRoutines(PageData));
      tagData = await getTagsList(loginStatus);
      dispatch(endListTags(tagData));
      console.log(data);
    })();
  }, [loginStatus, authStatus])
  pushPageData(listRoutines, data);

  return (
    <div className='container d-flex flex-column h-100'>
      <RoutineTimeLineModal/>
        <div className='row flex-shrink-0'>
          <TimeLineMonth month={PageDate[0].month}/>
          <TimeLineTitle week={'SUN'} date={PageDate[0].day}/>
          <TimeLineTitle week={'MON'} date={PageDate[1].day}/>
          <TimeLineTitle week={'TUE'} date={PageDate[2].day}/>
          <TimeLineTitle week={'WED'} date={PageDate[3].day}/>
          <TimeLineTitle week={'THU'} date={PageDate[4].day}/>
          <TimeLineTitle week={'FRI'} date={PageDate[5].day}/>
          <TimeLineTitle week={'SAT'} date={PageDate[6].day}/>
        </div>

      <div className='row flex-shrink-1 main-time-line'>
        <div className='d-flex flex-column TimeLineMonth-col p-0'>
          <div className='d-flex flex-column border TimeLine'>
            {timestamp.map((item, index) => {
              return (
                <div
                  key={'timestamp' + index}
                  className={'border-bottom'}
                  style={{height: '30px'}}
                >{item}</div>
              )
            })}
          </div>
        </div>
        <RoutineTimeLineItem week={'SUN'} date={PageDate[0].week} data={data[0]} tags={listTags}/>
        <RoutineTimeLineItem week={'MON'} date={PageDate[1].week} data={data[1]} tags={listTags}/>
        <RoutineTimeLineItem week={'TUE'} date={PageDate[2].week} data={data[2]} tags={listTags}/>
        <RoutineTimeLineItem week={'WED'} date={PageDate[3].week} data={data[3]} tags={listTags}/>
        <RoutineTimeLineItem week={'THU'} date={PageDate[4].week} data={data[4]} tags={listTags}/>
        <RoutineTimeLineItem week={'FRI'} date={PageDate[5].week} data={data[5]} tags={listTags}/>
        <RoutineTimeLineItem week={'SAT'} date={PageDate[6].week} data={data[6]} tags={listTags}/>
      </div>
    </div>
  );

  
};

export default TimeLineRoutine;