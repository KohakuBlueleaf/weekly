import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";
import "../style/TimeLine.css"


const ScheduleItem = (props) => {
  const dispatch = useDispatch();

  return (
    <div className='d-flex flex-column TimeLineItem-col p-0'>
        <p className='p-0 m-0 align-self-center'>{props.week}</p>
        <p className='p-0 m-0 align-self-center'>{props.date}</p>
    </div>
  );
};

export default ScheduleItem;