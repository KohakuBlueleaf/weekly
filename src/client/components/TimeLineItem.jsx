import React from 'react';
import { v4 as uuid } from 'uuid';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";
import "../style/TimeLine.css"


const TimeLineItem = (props) => {
  const dispatch = useDispatch();

  return (
    <div className='d-flex flex-column TimeLineItem-col p-0'>
      {/* {console.log(props.data)}
      {console.log('render')} */}
      <div className='d-flex flex-column border TimeLine'>
        
        {/* {console.log(props.data)} */}
        
        {props.data.map((item, index) => {
          return(
            item.duration === 0 ? '' :
            <div
              key={index + props.date}
              className={'border-bottom ' + (item.type==='empty' ? '' : 'TimeLineItemEvent')}
            
              style={{height: 30*item.duration + 'px'}}
            >{console.log(item.type)}{item.type==='empty' ? '' :item.name}</div>
          )
        })}
        

        {}

      </div>
    </div>
  );
};

export default TimeLineItem;