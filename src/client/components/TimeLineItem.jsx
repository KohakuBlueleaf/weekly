import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";
import "../style/TimeLine.css"


const TimeLineItem = (props) => {
  const dispatch = useDispatch();

  return (
    <div className='d-flex flex-column TimeLineItem-col p-0'>
      <div className='d-flex flex-column border TimeLine'>
        {props.data.map((item) => {
          return (
            <div
              key={item.time + props.date}
              className={'border-bottom ' + (item.type==='empty' ? '' : 'TimeLineItemEvent')}
              style={{height: 30*item.duration + 'px'}}
            >{item.type=='empty' ? '' :item.name} {item.time} {item.duration}</div>
          )
        })}
      </div>
    </div>
  );
};

export default TimeLineItem;