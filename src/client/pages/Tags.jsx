import React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { tagsThemeClose } from "../store/tags/action"
import TagList from '../components/TagList';
import TagAddModal from '../components/TagAddModal';

const Tags = () => {
  const dispatch = useDispatch();

  const {
    tagsThemeModalShow
  } = useSelector((state) => ({
    tagsThemeModalShow: state.tags.tagsThemeModalShow,
  }));

  return (
    <div>
      <TagList></TagList>

      <Modal
        show={tagsThemeModalShow}
        onHide={() => dispatch(tagsThemeClose())}
        size="md"
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

      <TagAddModal/>
    </div>
  );
};

export default Tags;