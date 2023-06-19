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
        title,
        timeLineModalShow,
    } = useSelector((state) => ({
        title: state.homePage.title,
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
                title
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                {title}
                {/* <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-2 align-self-center m-0'>Tag:</Form.Label>
                    <div className='col-10'>
                    <Form.Control type="text" name='title' placeholder="Enter Tag name" 
                      onChange={(e) => {setTitle(e.target.value); updateInput()}}/>
                    </div>
                </Form.Group>

                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label htmlFor="col-2 align-self-center m-0">Color picker:</Form.Label>
                    <div className='col-10'>
                        <Form.Control
                            className='m-0'
                            type="color"
                            defaultValue="#17385B"
                            title="Choose tags color"
                            onChange={(e) => {setColor(e.target.value)}}
                        />
                    </div>
                </Form.Group> */}

                <Modal.Footer>
                  <Button variant="primary" type="submit">
                      Submit
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
        </Modal>
    );
  };
  
  export default TimeLineModal;