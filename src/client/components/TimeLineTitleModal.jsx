import React from 'react';
import { useEffect, useState } from 'react';

import { connect, useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { MobileDatePicker, StaticDatePicker  } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "react-datepicker/dist/react-datepicker.css";

import { timeLineTitleModalClose } from '../store/homePage/action';

const TimeLineTitleModal = () => {
    const dispatch = useDispatch();
  
    const {
        timeLineTitleModalShow,
    } = useSelector((state) => ({
        timeLineTitleModalShow: state.homePage.timeLineTitleModalShow,
    }));

    return (
        <Modal
          show={timeLineTitleModalShow}
          onHide={() => dispatch(timeLineTitleModalClose())}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Choose a date
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker  onChange={(date) => {console.log("hihi")}}/>
                </LocalizationProvider>
              </Form>
            </Modal.Body>
        </Modal>
    );
  };
  
  export default TimeLineTitleModal;