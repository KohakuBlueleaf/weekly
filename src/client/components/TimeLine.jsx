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


import "../style/TimeLine.css"
import { from } from 'webpack-sources/lib/CompatSource';

const TimeLine = () => {
  const [user, authStatus] = useOutletContext();
  const dispatch = useDispatch();

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