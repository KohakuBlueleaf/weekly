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
import HomeAddModalTag from './HomeaddModalTag';
import { getPageDate } from '../utils';

import { addClose } from "../store/todo/action"

import { setInput } from '../store/todo/action';
import { endListTodos } from '../store/todo/action';

import { listTodos as listTodosFromApi, createTodo as createTodoFromApi } from '../api/todo';

const TodoAddModal = () => {
    const dispatch = useDispatch();
  
    const {
        addModalShow,
    } = useSelector((state) => ({
        addModalShow: state.todo.addModalShow
    }));
    const loginStatus = useSelector((state) => state.user.token);

    let inputState;

    const updateInput = () => {
      inputState = {
        conpleted: false,
        title: title,
        year: startDate.getFullYear(),
        month: startDate.getMonth() + 1,
        day: startDate.getDate(),
        weekday: startDate.getDay(),
        tags: tag,
      }
      dispatch(setInput(inputState));
    }
    
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState([]);
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
                await createTodoFromApi(inputState, loginStatus);
                dispatch(endListTodos(await listTodosFromApi(getPageDate(), loginStatus)));
                dispatch(addClose());
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

                <HomeAddModalTag setTag={setTag} updateInput={updateInput}/>
                
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