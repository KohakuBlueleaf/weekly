import React from 'react';
import { v4 as uuid } from 'uuid';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";
import "../style/TimeLine.css"

import { routineTimeLineModalToggle } from '../store/routine/action';
import { brightness } from '../utils';

const RoutineTimeLineItem = (props) => {
  const dispatch = useDispatch();

  return (
    <div className='d-flex flex-column TimeLineItem-col p-0'>
      <div className='d-flex flex-column TimeLine'>        
        {props.data.map((item, index) => {
          let tag;
          props.tags.map(t=>{
            item.tags.every(targetTag=>{
              console.log(t, targetTag)
              if(t.id == targetTag){
                console.log(t, targetTag)
                tag = t;
                return false
              }
              return true;
            })
          })
          return(
            (item.timeEnd-item.timeStart) === 0 ? '' :
            item.timeStart <0 || item.timeStart>47 ? '':
            <div
              key={index + props.date}
              className={
                (item.timeStart%2 ? 'border-bottom ': '') 
                + (item.type==='empty' ? '' : 'TimeLineItemEvent')
                + ' d-flex align-items-center justify-content-center'
              }
              style={{
                height: 30*(item.timeEnd-item.timeStart) + 'px',
                backgroundColor: tag ? (tag.color || '#17385B') : '',
                color: brightness(tag ? (tag.color || '#17385B') : '#ACBDCE')>127 ? 'black': 'white',
              }}
              onClick={() => {
                if (item.type !== 'empty'){
                  dispatch(routineTimeLineModalToggle(item));
                }
              }}
            >{item.type==='empty' ? '' :item.title}</div>
          )
        })}
      </div>
    </div>
  );
};

export default RoutineTimeLineItem;