import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";
import TimeLineItem from './TimeLineItem';
import TimeLineMonth from './TimeLineMonth';
import TimeLineTitle from './TimeLineTitle';
import { listEvents } from '../api/event';
import { listRoutines } from '../api/routine';
import '../style/TimeLine.css'
import TimeLineModal from './TimeLineModal';

//for display
function addEvent(timeline, event, date) {
  //has bug, need fix
  let targetTimeStamp = event.time;
  let newTimeline = [];
  let nowTime = 0;
  timeline[date].forEach((element, index) => {
    if(nowTime == targetTimeStamp){
      newTimeline.push(event);
      if(element.duration > event.duration){
        nowTime += element.duration;
        element.duration -= event.duration;
        element.time += event.duration;
        newTimeline.push(element);
      }else{
        nowTime += event.duration;
      }
      targetTimeStamp = 1000;
      return
    }
    if(nowTime > element.time){
      let timeReduce = nowTime - element.time;
      if(timeReduce >= element.duration) return;
      element.time = nowTime;
      element.duration = element.duration - timeReduce;
    }else if(nowTime < element.time){
      for(let i=0; i<element.time-nowTime; i++){
        newTimeline.push({
          name: '',
          time: nowTime + i,
          type: 'empty',
          duration: 1
        });
      }
      nowTime = element.time;
    }
    nowTime += element.duration;
    if(nowTime > targetTimeStamp){
      element.duration = element.duration - (nowTime-targetTimeStamp);
      nowTime = targetTimeStamp;
    }
    newTimeline.push(element);
  });
  if(nowTime < 48){
    for(let i=0; i<48-nowTime; i++){
      newTimeline.push({
        name: '',
        time: nowTime + i,
        type: 'empty',
        duration: 1
      });
    }
  }
  timeline[date] = newTimeline;
}

//回傳本周日期
function getPageDate() {
  
  let pageDates = [{},{},{},{},{},{},{}];
  let constraintDay = 31;
  let preveiosDay = 31;
  let today = new Date();
  const thisYear = today.getFullYear();
  const thisWeek = today.getDay();
  const thisMonth = today.getMonth()+1;
  const thisDate = today.getDate();

  switch (thisMonth) {
    case 2:
      constraintDay = 28;
      break;
    case 1, 3, 5, 7, 8, 10, 12: constraintDay = 31;
      break;
    default: constraintDay = 30;
      break;
  }

  switch (thisMonth) {
    case 3:
      preveiosDay = 28;
      break;
    case 1, 2, 4, 6, 8, 9, 11: preveiosDay = 31;
      break;
    default: preveiosDay = 30;
      break;
  }

  //pageDates[thisWeek] = {thisMonth, thisDate};
  for(let i=thisWeek,j=0; i<7; i++,j++) {
    let theDay = {};
    if(thisDate+j>constraintDay) {
      theDay = {
        year: thisYear,
        month: thisMonth<12 ? thisMonth+1 : 1,
        day: thisDate+j-constraintDay,
        week: i        
      }
    }
    else {
      theDay = {
        year: thisYear,
        month: thisMonth,
        day: thisDate+j,
        week: i
      }
    }
    pageDates[i] = theDay;
  }

  for(let i=thisWeek-1,j=1; i>=0; i--,j++) {
    let theDay = {};
    if(thisDate-j<=0) {
      theDay = {
        year: thisYear,
        month: thisMonth-1>=0 ? thisMonth-1 : 12,
        day: preveiosDay+(thisDate-j),
        week: i
      }
    }
    else {
      theDay = {
        year: thisYear,
        month: thisMonth,
        day: thisDate-j,
        week: i
      }
    }
    pageDates[i] = theDay;

  }

  // {
  //   year: 
  //   month:
  //   day:
  //   week:
  // }
  return pageDates;
}

async function getPageEvent(PageDate, login) {
  return await listEvents(PageDate, login);
}

function getPageRoutine(PageDate, login) {
  return listRoutines(PageDate, login);
}

function pushPageData(PageData, data) {
  for(let j=0; j<7; j++) {
    PageData[j].map(element => {
      if(element.timeStart<0 || element.timeEnd>47 || element.timeEnd<=element.timeStart){
        return
      }
      for(let k=element.timeStart+1; k<element.timeEnd; k++) {
        if(data[j][k].name === 'non') return;
        data[j][k] = {
          name: 'non',
          time: k,
          type: 'empty',
          duration: 0
        }
      }
      if(data[j][element.timeStart].name === 'non') return;
      data[j][element.timeStart] = {
        name: element.title,
        time: element.timeStart,
        type: element.type,
        duration: element.timeEnd-element.timeStart
      }
    })
  }
}



import "../style/TimeLine.css"
import { from } from 'webpack-sources/lib/CompatSource';
import { element } from 'prop-types';

const TimeLine = () => {
  const loginStatus = useSelector((state) => state.user.token);
  console.log(loginStatus);
  const [user, authStatus] = useOutletContext();
  const dispatch = useDispatch();
  let temp = [];
  for(let j=0; j<7; j++){
    temp.push([]);
    for(let i=0; i<48; i++){
      temp[j].push({
        name: i,
        time: i,
        type: 'empty',
        duration: 1
      })
    }
  }
  const [data, setData] = useState(temp);
  let PageDate = getPageDate();
  let PageData = [];
  
  let timestamp = [];
  for(let i=0; i<48; i++){
    //先用半個小時為單位，好開發
    if(i%2) timestamp.push('')
    else timestamp.push(i/2 + '.');
    // timestamp.push(i + ':30');
  }

  useEffect(()=>{
    console.log('get events', loginStatus);
    (async()=>{
      PageDate = getPageDate();
      PageData = await getPageEvent(PageDate, loginStatus);
      console.log('get events', PageData);
      pushPageData(PageData, temp);
      setData(temp);
      
      PageData = getPageRoutine(PageDate, loginStatus);
      pushPageData(PageData, temp);

      console.log(data);
    })();
  }, [])

  console.log("data:123123123", data)
  return (
    <div className='container d-flex flex-column h-100'>
      {/* {console.log(data)}
      {console.log('render')} */}
      <TimeLineModal/>
      <div className='row flex-shrink-0'>
        <TimeLineMonth month={'MAY'}/>
        <TimeLineTitle week={'SUN'} date={PageDate[0].day}/>
        <TimeLineTitle week={'MON'} date={PageDate[1].day}/>
        <TimeLineTitle week={'TUE'} date={PageDate[2].day}/>
        <TimeLineTitle week={'WED'} date={PageDate[3].day}/>
        <TimeLineTitle week={'THU'} date={PageDate[4].day}/>
        <TimeLineTitle week={'FRI'} date={PageDate[5].day}/>
        <TimeLineTitle week={'SAT'} date={PageDate[6].day}/>
      </div>

      <div>
        框框
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
        <TimeLineItem week={'SUN'} date={PageDate[0].week} data={data[0]}/>
        <TimeLineItem week={'MON'} date={PageDate[1].week} data={data[1]}/>
        <TimeLineItem week={'TUE'} date={PageDate[2].week} data={data[2]}/>
        <TimeLineItem week={'WED'} date={PageDate[3].week} data={data[3]}/>
        <TimeLineItem week={'THU'} date={PageDate[4].week} data={data[4]}/>
        <TimeLineItem week={'FRI'} date={PageDate[5].week} data={data[5]}/>
        <TimeLineItem week={'SAT'} date={PageDate[6].week} data={data[6]}/>
      </div>
    </div>
  );

  
};

export default TimeLine;