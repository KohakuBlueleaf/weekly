import React from 'react';
import { useEffect, useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

import { connect, useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "react-datepicker/dist/react-datepicker.css";

import { addClose } from "../store/todo/action"

import { setInput } from '../store/todo/action';
import { createTodo } from '../store/todo/action';

const TodoAddModal = () => {
    const [user, authStatus] = useOutletContext();
    const dispatch = useDispatch();
  
    const {
        addModalShow,
    } = useSelector((state) => ({
        addModalShow: state.todo.addModalShow
    }));

    let inputState;

    const updateInput = () => {
      inputState = {
        title: title,
        date_year: startDate.getFullYear(),
        date_month: startDate.getMonth() + 1,
        date_day: startDate.getDate(),
        week: startDate.getDay(),
        tags: tag,
      }
      dispatch(setInput(inputState));
    }
    
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Modal
          show={addModalShow}
          onHide={() => dispatch(addClose())}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add an event
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(e) => {
                console.log("aslkdnaskldnaklsdn~~~~~~~~~~")
                updateInput();
                // e.preventDefault();
                createTodo(inputState);
              }}
            >
                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-2 align-self-center m-0'>Title:</Form.Label>
                    <div className='col-10'>
                    <Form.Control type="text" name='title' placeholder="Enter event title" 
                      onChange={(e) => {setTitle(e.target.value); updateInput()}}/>
                    </div>
                </Form.Group>

                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-2 align-self-center m-0'>Date: </Form.Label>
                    <div className='col-10 date-picker'>
                    <LocalizationProvider className='' dateAdapter={AdapterDayjs}>
                      <MobileDatePicker onChange={(date) => {if (date) {setStartDate(date.$d); updateInput()}}}/>
                    </LocalizationProvider>
                    </div>
                </Form.Group>

                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTag">
                  <Form.Label className='col-2 align-self-center m-0'>Tag:</Form.Label>
                  <div className='col-10'>
                      <Form.Select aria-label="Default select example" 
                      onChange={(e) => {setTag(e.target.value); updateInput()}}>
                        <option>selece a tag</option>
                        <option>Math</option>
                        <option>Algo</option>
                        <option>OS</option>
                      </Form.Select>
                  </div>
                </Form.Group>
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
  
  export default TodoAddModal;