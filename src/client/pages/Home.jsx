import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useOutletContext } from "react-router-dom";
import TimeLine from "../components/TimeLine";

import { addToggle, addClose } from '../store/homePage/action';


/**
 * Renders a Home component with a title "Home page" 
 * and logs the user and authentication status on mount.
 *
 * @returns {JSX.Element} The Home component.
 */
const Home = () => {
  const [user, authStatus] = useOutletContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const {
    addModalShow,
  } = useSelector((state) => ({
    addModalShow: state.homePage.addModalShow,
  }));

  //Will be executed when this component be rendered
  useEffect(()=>{
    console.log(user, authStatus);
  })
  
  return (
    <div>
      <TimeLine/>
      <Modal
        show={addModalShow}
        onHide={() => dispatch(addClose())}
        size="sm"
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
                <Form.Control type="text" placeholder="Enter event title" />
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;