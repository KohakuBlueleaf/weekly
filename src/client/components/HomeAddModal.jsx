import React from 'react';
import { useEffect, useState } from 'react';

import { connect, useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import HomeAddModalTag from './HomeaddModalTag';
import "react-datepicker/dist/react-datepicker.css";
import { getPageDate } from '../utils';

import { addClose } from "../store/homePage/action"

import { endListEvents, setInput } from '../store/posts/action';
import { endListTodos, setInput as setInputFromTodo } from '../store/todo/action';
// import { createEvent } from '../store/posts/action';
import { createEvent as createEventFromApi, listEvents as listEventsFromApi } from '../api/event';
import { createTodo as createTodoFromApi, listTodos as listTodosFromApi } from '../api/todo';

import '../style/homePage.css';

const HomeAddModal = () => {
    const dispatch = useDispatch();
  
    const {
        addModalShow,
    } = useSelector((state) => ({
        addModalShow: state.homePage.addModalShow
    }));
    const loginStatus = useSelector((state) => state.user.token);
    
    let inputState;

    const updateInput = () => {
      if (!todoSelect) {
        inputState = {
          type: 'event',
          title: title,
          year: startDate.getFullYear(),
          month: startDate.getMonth() + 1,
          day: startDate.getDate(),
          week: startDate.getDay(),
          timeStart: timeStart && !todoSelect ? timeStart.getHours() * 2 + Math.floor(timeStart.getMinutes() / 30) : -1,
          timeEnd: timeEnd && !todoSelect ? timeEnd.getHours() * 2 + Math.floor(timeEnd.getMinutes() / 30) : -1,
          tags: tag,
          location: location,
        }
        dispatch(setInput(inputState));
      } else {
        inputState = {
          conpleted: false,
          title: title,
          year: startDate.getFullYear(),
          month: startDate.getMonth() + 1,
          day: startDate.getDate(),
          weekday: startDate.getDay(),
          tags: tag,
        }
        dispatch(setInputFromTodo(inputState));
      }
    }
    
    const [todoSelect, setTodoSelect] = useState(false);
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState([]);
    const [timeStart, setTimeStart] = useState("");
    const [timeEnd, setTimeEnd] = useState("");
    const [location, setLocation] = useState("");
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
              onSubmit={async (e) => {
                updateInput();
                e.preventDefault();
                if (!todoSelect) {
                  await createEventFromApi(inputState, loginStatus);
                  dispatch(endListEvents(await listEventsFromApi(getPageDate(), loginStatus)));
                } else {
                  await createTodoFromApi(inputState, loginStatus);
                  dispatch(endListTodos(await listTodosFromApi(getPageDate(), loginStatus)));
                }
                dispatch(addClose());
                //call api at here
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

                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-2 align-self-center m-0'>Start: </Form.Label>
                    <div className='col-10 date-picker'>
                    <LocalizationProvider className='' dateAdapter={AdapterDayjs}>
                      <MobileTimePicker disabled={todoSelect ? true : false} onChange={(e) => {if (e) {setTimeStart(e.$d); updateInput()}}}/>
                    </LocalizationProvider>
                    </div>
                </Form.Group>

                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-2 align-self-center m-0'>End: </Form.Label>
                    <div className='col-10 date-picker'>
                    <LocalizationProvider className='' dateAdapter={AdapterDayjs}>
                      <MobileTimePicker disabled={todoSelect ? true : false} onChange={(e) => {if (e) {setTimeEnd(e.$d); updateInput()}}}/>
                    </LocalizationProvider>
                    </div>
                </Form.Group>

                <HomeAddModalTag setTag={setTag} updateInput={updateInput}/>

                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-2 align-self-center m-0'>Location:</Form.Label>
                    <div className='col-10'>
                    <Form.Control disabled={todoSelect ? true : false} type="text" name='title' placeholder="Enter event location" 
                      onChange={(e) => {setLocation(e.target.value); updateInput()}}/>
                    </div>
                </Form.Group>
  
                <Form.Group className="d-flex flex-row row mb-3" controlId="formBasicCheckbox">
                  <div>
                    <Form.Check className='col-2 form-check-inline' name='group1' type="radio" label="Event" defaultChecked onClick={() => setTodoSelect(false)}/>
                    <Form.Check className='col-2 form-check-inline' name='group1' type="radio" label="Todo" onClick={() => setTodoSelect(true)}/>
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
  
  export default HomeAddModal;