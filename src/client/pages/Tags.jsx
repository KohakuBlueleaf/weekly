import React from 'react';
import { useEffect } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

import { connect, useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { tagsAddToggle, tagsAddClose, tagsThemeToggle, tagsThemeClose } from "../store/tags/action"
import TagList from '../components/TagList';

const Tags = () => {
  const [user, authStatus] = useOutletContext();
  const posts = useSelector((state) => state.post.messages);
  const dispatch = useDispatch();

  const {
    tagsAddModalShow,
    tagsThemeModalShow
  } = useSelector((state) => ({
    tagsAddModalShow: state.tags.tagsAddModalShow,
    tagsThemeModalShow: state.tags.tagsThemeModalShow,
  }));

  //Will be executed when this component be rendered
  useEffect(()=>{
    console.log(user, authStatus);
  })

  return (
    <div>
      <h1>Welcome to the React App!</h1>
      <p>This is tags page.</p>

      <Modal
        show={tagsThemeModalShow}
        onHide={() => dispatch(tagsThemeClose())}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Theme
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
            <Form.Select aria-label="Default select example">
              <option>select a theme</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>

      <Modal
        show={tagsAddModalShow}
        onHide={() => dispatch(tagsAddClose())}
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

export default Tags;