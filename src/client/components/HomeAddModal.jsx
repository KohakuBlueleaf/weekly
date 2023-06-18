import React from 'react';
import { useEffect, useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

import { connect, useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { addClose } from "../store/homePage/action"

import { setInput } from '../store/posts/action';
import { createEvent } from '../store/posts/action';


const HomeAddModal = () => {
    const [user, authStatus] = useOutletContext();
    const dispatch = useDispatch();
  
    const {
        addModalShow,
    } = useSelector((state) => ({
        addModalShow: state.homePage.addModalShow
    }));
    
    let inputState;

    const updateInput = () => {
      // console.log({
      //   title: title,
      //   tag: tag,
      //   time: time,
      // })
      // console.log(startDate.getDate());
      inputState = {
        title: title,
        date_year: startDate.getFullYear(),
        date_month: startDate.getMonth() + 1,
        date_day: startDate.getDate(),
        week: startDate.getDay(),
        timeStart: -1,
        timeEnd: -1,
        tags: tag,
        location: location,
      }
      dispatch(setInput(inputState))
    }
    
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [time, setTime] = useState("");
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
              onSubmit={(e) => {
                updateInput();
                e.preventDefault();
                createEvent(inputState);
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
                    <div className='col-10'>
                      <DatePicker selected={startDate} 
                      onChange={(date) => {setStartDate(date); updateInput()}} />
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
  
                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTag">
                  <Form.Label className='col-2 align-self-center m-0'>Time:</Form.Label>
                  <div className='col-10'>
                      <Form.Select aria-label="Default select example" 
                      onChange={(e) => {setTime(e.target.value); updateInput()}}>
                      <option>selece a tag</option>
                      <option>Math</option>
                      <option>Algo</option>
                      <option>OS</option>
                      </Form.Select>
                  </div>
                </Form.Group>

                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-2 align-self-center m-0'>Location:</Form.Label>
                    <div className='col-10'>
                    <Form.Control type="text" name='title' placeholder="Enter event location" 
                      onChange={(e) => {setLocation(e.target.value); updateInput()}}/>
                    </div>
                </Form.Group>
  
                <Form.Group className="d-flex flex-row row mb-3" controlId="formBasicCheckbox">
                  <Form.Check className='col-2' type="checkbox" label="todo" />
                  <Form.Check className='col-2' type="checkbox" label="event" />
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