import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";
import TimeLineItem from './TimeLineItem';
import TimeLineMonth from './TimeLineMonth';

import "../style/TimeLine.css"

const TimeLine = () => {
  const [user, authStatus] = useOutletContext();
  const dispatch = useDispatch();

  //Will be executed when this component be rendered
  useEffect(()=>{
    console.log(user, authStatus);
  })

  return (
    <div className='container'>
        <div className='row'>
            <TimeLineMonth month={'MAY'}/>
            <TimeLineItem week={'SUN'} date={21}/>
            <TimeLineItem week={'MON'} date={22}/>
            <TimeLineItem week={'TUE'} date={23}/>
            <TimeLineItem week={'WED'} date={24}/>
            <TimeLineItem week={'THU'} date={25}/>
            <TimeLineItem week={'FRI'} date={26}/>
            <TimeLineItem week={'SAT'} date={27}/>
        </div>
    </div>
  );
};

export default TimeLine;