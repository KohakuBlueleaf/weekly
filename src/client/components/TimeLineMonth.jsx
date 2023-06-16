import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";


const TimeLineMonth = (props) => {
  const dispatch = useDispatch();

  return (
    <div className='d-flex col-1 p-0 align-items-end'>
        <p className='p-0 m-0'>{props.month}</p>
    </div>
  );
};

export default TimeLineMonth;