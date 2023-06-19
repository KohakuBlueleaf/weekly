import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const DailyTree = () => {
    const dispatch = useDispatch();

    const {
        event,
    } = useSelector((state) => ({
        event: state.addModal.event
    }));
    
    return (
        //插入圖片(routine/events/樹幹)
        <div>
            <div className='d-flex justify-content-end'>
                ss quiz
            </div>
            <div className='d-flex justify-content-start'>
                English
            </div>
            <div className='d-flex justify-content-start'>
                English
            </div>
            <div className='d-flex justify-content-end'>
                ss lab
            </div>
            <div className='d-flex justify-content-start'>
                python
            </div>
            
        </div>    
        
    ) 
}

export default DailyTree;