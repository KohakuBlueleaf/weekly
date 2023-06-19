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
                  <Form.Label className='col-2 align-self-center m-0'>Start:</Form.Label>
                    <div className='col-10'>
                      {Math.floor(timeStart / 2)} : {timeStart % 2 ? '30' : '00'}
                    </div>
                </Form.Group>

                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-2 align-self-center m-0'>End:</Form.Label>
                    <div className='col-10'>
                    {Math.floor(timeEnd / 2)} : {timeEnd % 2 ? '30' : '00'}
                    </div>
                </Form.Group>
              </Form>
          </Modal.Body>
        </Modal>
    );
  };
  
  export default TimeLineModal;