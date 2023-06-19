import React from 'react';
import { useEffect, useState } from 'react';

import { connect, useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "react-datepicker/dist/react-datepicker.css";

import { routineTimeLineModalClose } from '../store/routine/action';

const RoutineTimeLineModal = () => {
    const dispatch = useDispatch();
  
    const {
        type,
        title,
        year,
        month,
        day,
        week,
        timeStart,
        timeEnd,
        tags,
        location,
        timeLineModalShow,
    } = useSelector((state) => ({
        type: state.routine.type,
        title: state.routine.title,
        year: state.routine.year,
        month: state.routine.month,
        day: state.routine.day,
        week: state.routine.week,
        timeStart: state.routine.timeStart,
        timeEnd: state.routine.timeEnd,
        tags: state.routine.tags,
        location: state.routine.location,
        timeLineModalShow: state.routine.timeLineModalShow,
    }));

    const weekday = (week) => {
      switch (week) {
        case 0:
          return 'SUN'
        case 1:
          return 'MON'
        case 2:
          return 'TUE'
        case 3:
          return 'WED'
        case 4:
          return 'THU'
        case 5:
          return 'FRI'
        case 6:
          return 'SAT'
        default:
          break;
      }
    }
    

    return (
        <Modal
          show={timeLineModalShow}
          onHide={() => dispatch(routineTimeLineModalClose())}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-3 align-self-center m-0'>Type:</Form.Label>
                    <div className='col'>
                      {type === 'event' ? 'Event' : 'Routine'}
                    </div>
                </Form.Group>

                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-3 align-self-center m-0'>Week:</Form.Label>
                    <div className='col'>
                      {`${weekday(week)}`}
                    </div>
                </Form.Group>

                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-3 align-self-center m-0'>Start:</Form.Label>
                    <div className='col'>
                      {Math.floor(timeStart / 2)} : {timeStart % 2 ? '30' : '00'}
                    </div>
                </Form.Group>

                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-3 align-self-center m-0'>End:</Form.Label>
                    <div className='col'>
                    {Math.floor(timeEnd / 2)} : {timeEnd % 2 ? '30' : '00'}
                    </div>
                </Form.Group>

                {/* <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-3 align-self-center m-0'>Tags:</Form.Label>
                    <div className='col'>
                      {tags[0].title}
                    </div>
                </Form.Group> */}

                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-3 align-self-center m-0'>Location:</Form.Label>
                    <div className='col'>
                      {location}
                    </div>
                </Form.Group>

              </Form>
          </Modal.Body>
        </Modal>
    );
  };
  
  export default RoutineTimeLineModal;