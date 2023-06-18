import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";
import TimeLineItem from './TimeLineItem';
import TimeLineMonth from './TimeLineMonth';
import TimeLineTitle from './TimeLineTitle';
import { listEvents } from '../api/event';
import '../style/TimeLine.css'

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

//回傳本周資料(routine, event, todo)
function getPageData(PageDate) {
  let PageData = [];
  //let PageEvent = [];
  //let PageTodo = [];
  let PageEvents = listEvents(PageDate); //array[array[obj, ...], array, ...]
  PageData = PageEvents;

  return PageData;
}




import "../style/TimeLine.css"
import { from } from 'webpack-sources/lib/CompatSource';

const TimeLine = () => {
  const [user, authStatus] = useOutletContext();
  const dispatch = useDispatch();
  let PageDate = getPageDate();
  let PageData = getPageData(PageDate);
  console.log(PageDate);
  console.log(PageData);

  //Will be executed when this component be rendered
  useEffect(()=>{
    console.log(user, authStatus);
  })
  
  let timestamp = [];
  for(let i=0; i<48; i++){
    //先用一個小時為單位，好開發
    if(i%2) timestamp.push('')
    else timestamp.push(i/2 + '.');
    // timestamp.push(i + ':30');
  }

  let data = [];
  for(let j=0; j<7; j++){
    data.push([]);
    for(let i=0; i<48; i++){
      data[j].push({
        name: i,
        time: i,
        type: 'empty',
        duration: 1
      })
    }
  }
  
  for(let i=0; i<60; i++){
    let date = Math.floor(Math.random() * 7);
    let time = Math.floor(Math.random() * 48);
    let duration = Math.floor(Math.random() * 16) + 1;
    if(duration<=0){
      duration = 1;
    }
    if(duration>=(48-time)){
      duration = (48-time);
    }
    addEvent(data, {
      name: 'test' + i,
      time: time,
      type: 'thing',
      duration: duration
    }, date)
  }
  

  return (
    <div className='container d-flex flex-column h-100'>
      <div className='row flex-shrink-0'>
        <TimeLineMonth month={'MAY'}/>
        <TimeLineTitle week={'SUN'} date={21}/>
        <TimeLineTitle week={'MON'} date={22}/>
        <TimeLineTitle week={'TUE'} date={23}/>
        <TimeLineTitle week={'WED'} date={24}/>
        <TimeLineTitle week={'THU'} date={25}/>
        <TimeLineTitle week={'FRI'} date={26}/>
        <TimeLineTitle week={'SAT'} date={27}/>
      </div>

      <div>
        框框
      </div>

      <div className='row flex-shrink-1 main-time-line'>
        <div className='d-flex flex-column TimeLineMonth-col p-0'>
          <div className='d-flex flex-column border TimeLine'>
            {timestamp.map((item) => {
              return (
                <div
                  key={'timestamp' + item}
                  className={'border-bottom'}
                  style={{height: '30px'}}
                >{item}</div>
              )
            })}
          </div>
        </div>
        <TimeLineItem week={'SUN'} date={21} data={data[0]}/>
        <TimeLineItem week={'MON'} date={22} data={data[1]}/>
        <TimeLineItem week={'TUE'} date={23} data={data[2]}/>
        <TimeLineItem week={'WED'} date={24} data={data[3]}/>
        <TimeLineItem week={'THU'} date={25} data={data[4]}/>
        <TimeLineItem week={'FRI'} date={26} data={data[5]}/>
        <TimeLineItem week={'SAT'} date={27} data={data[6]}/>
      </div>
    </div>
  );
};

export default TimeLine;