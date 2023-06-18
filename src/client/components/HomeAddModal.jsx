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


const HomeAddModal = () => {
    const [user, authStatus] = useOutletContext();
    const posts = useSelector((state) => state.post.messages);
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch();
  
    const {
        addModalShow,
    } = useSelector((state) => ({
        addModalShow: state.homePage.addModalShow
    }));

    // const {
    //   title,
    //   date_year,
    //   date_month,
    //   date_day,
    //   week,
    //   timeStart,
    //   timeEnd,
    //   tags,
    //   location,
    // } = useSelector((state) => ({
    //     title: state.addModal.title,
    //     date_year: state.addModal.date_year,
    //     date_month: state.addModal.date_month,
    //     date_day: state.addModal.date_day,
    //     week: state.addModal.week,
    //     timeStart: state.addModal.timeStart,
    //     timeEnd: state.addModal.titimeEndtle,
    //     tags: state.addModal.tags,
    //     location: state.addModal.location,
    // }));

    const titleChange = (text) => {
      // console.log("ihihihihih~!~~~~~~~~~~~~");
      // console.log(text);
    }

    const handleAddEvent = () => {
      // let temp = {
      //   title: title,
      //   date_year: date_year,
      //   date_month: date_month,
      //   date_day: date_day,
      //   week: week,
      //   timeStart: timeStart,
      //   timeEnd: timeEnd,
      //   tags: tags,
      //   location: location,
      // }
      // dispatch(createEvent(temp))
    }

    // console.log("hi~~~~\n", startDate);
  
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
            <Form>
                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-2 align-self-center m-0'>Title:</Form.Label>
                    <div className='col-10'>
                    <Form.Control type="text" name='title' placeholder="Enter event title" onChange={() => titleChange("fuck you")}/>
                    </div>
                </Form.Group>

                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
                  <Form.Label className='col-2 align-self-center m-0'>Date: </Form.Label>
                    <div className='col-10'>
                      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </Form.Group>

                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTag">
                  <Form.Label className='col-2 align-self-center m-0'>Tag:</Form.Label>
                  <div className='col-10'>
                      <Form.Select aria-label="Default select example">
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
                      <Form.Select aria-label="Default select example">
                      <option>selece a tag</option>
                      <option>Math</option>
                      <option>Algo</option>
                      <option>OS</option>
                      </Form.Select>
                  </div>
                </Form.Group>
  
                <Form.Group className="d-flex flex-row row mb-3" controlId="formBasicCheckbox">
                  <Form.Check className='col-2' type="checkbox" label="todo" />
                  <Form.Check className='col-2' type="checkbox" label="event" />
                </Form.Group>
  
                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTag">
                  <Form.Label className='col-2 align-self-center m-0'>Repeat:</Form.Label>
                  <div className='col-10'>
                      <Form.Select aria-label="Default select example">
                      <option>selece a tag</option>
                      <option>daily</option>
                      <option>weekly</option>
                      <option>monthly</option>
                      </Form.Select>
                  </div>
                </Form.Group>

            </Form>
              <Modal.Footer>
                  <Button variant="primary" type="submit" onClick={handleAddEvent}>
                      Submit
                  </Button>
              </Modal.Footer>
            </Modal.Body>
        </Modal>
    );
  };
  
  export default HomeAddModal;