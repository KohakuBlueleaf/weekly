import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";
import TimeLineItem from './TimeLineItem';
import TimeLineMonth from './TimeLineMonth';
import TimeLineTitle from './TimeLineTitle';
import '../style/TimeLine.css'


function addEvent(timeline, event, date) {
  //has bug, need fix
  let targetTimeStamp = event.time;
  let newTimeline = [];
  let nowTime = 0;
  timeline[date].forEach((element, index) => {
    if(nowTime > element.time){
      let timeReduce = nowTime - element.time;
      if(timeReduce >= element.duration) return;
      element.time = nowTime;
      element.duration = element.duration - timeReduce;
    }
    if(nowTime == targetTimeStamp){
      newTimeline.push(event);
      nowTime += event.duration;
      targetTimeStamp = 1000;
      return
    }
    nowTime += element.duration;
    if(nowTime > targetTimeStamp){
      element.duration = element.duration - (nowTime-targetTimeStamp);
      nowTime = targetTimeStamp;
    }
    newTimeline.push(element);
  });
  timeline[date] = newTimeline;
}


import "../style/TimeLine.css"

const TimeLine = () => {
  const [user, authStatus] = useOutletContext();
  const dispatch = useDispatch();

  //Will be executed when this component be rendered
  useEffect(()=>{
    console.log(user, authStatus);
  })
  
  let timestamp = [];
  for(let i=0; i<24; i++){
    //先用一個小時為單位，好開發
    timestamp.push(i + ':00');
    // timestamp.push(i + ':30');
  }
  
  let data = [];
  for(let j=0; j<7; j++){
    data.push([]);
    for(let i=0; i<24; i++){
      data[j].push({
        name: i,
        time: i,
        type: 'empty',
        duration: 1
      })
    }
  }
  
  for(let i=0; i<12; i++){
    let date = Math.floor(Math.random() * 7);
    let time = Math.floor(Math.random() * 24);
    let duration = Math.floor(Math.random() * (24-time)) + 1;
    if(duration<=0){
      duration = 1;
    }
    if(duration>=7){
      duration = 7;
    }
    addEvent(data, {
      name: 'test' + i,
      time: time,
      type: 'thing',
      duration: duration
    }, date)
  }
  

  return (
    <div className='container'>
      <div className='row'>
        <TimeLineMonth month={'MAY'}/>
        <TimeLineTitle week={'SUN'} date={21}/>
        <TimeLineTitle week={'MON'} date={22}/>
        <TimeLineTitle week={'TUE'} date={23}/>
        <TimeLineTitle week={'WED'} date={24}/>
        <TimeLineTitle week={'THU'} date={25}/>
        <TimeLineTitle week={'FRI'} date={26}/>
        <TimeLineTitle week={'SAT'} date={27}/>
      </div>
      <div className='row main-time-line'>
        <div className='d-flex flex-column TimeLineMonth-col p-0 border'>
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