import React from 'react';
import { useEffect, useState } from 'react';

import { connect, useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "react-datepicker/dist/react-datepicker.css";

import { timeLineModalClose } from '../store/homePage/action';

const TimeLineModal = () => {
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
        type: state.homePage.type,
        title: state.homePage.title,
        year: state.homePage.year,
        month: state.homePage.month,
        day: state.homePage.day,
        week: state.homePage.week,
        timeStart: state.homePage.timeStart,
        timeEnd: state.homePage.timeEnd,
        tags: state.homePage.tags,
        location: state.homePage.location,
        timeLineModalShow: state.homePage.timeLineModalShow,
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
          onHide={() => dispatch(timeLineModalClose())}
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
                  <Form.Label className='col-3 align-self-center m-0'>Date:</Form.Label>
                    <div className='col'>
                      {`${year}/${month}/${day} ${weekday(week)}`}
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
  
  export default TimeLineModal;