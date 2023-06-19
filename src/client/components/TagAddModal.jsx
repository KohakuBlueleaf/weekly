import React from 'react';
import { useEffect, useState } from 'react';

import { connect, useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "react-datepicker/dist/react-datepicker.css";

import { tagsAddClose } from "../store/tags/action"

import { setInput } from '../store/tags/action';
import { endListTags } from '../store/tags/action';

import { createTag as createTagFromApi, listTags as listTagsFromApi } from '../api/tag';

const TagAddModal = () => {
    const dispatch = useDispatch();
  
    const {
      tagsAddModalShow,
    } = useSelector((state) => ({
      tagsAddModalShow: state.tags.tagsAddModalShow,
    }));
    const loginStatus = useSelector((state) => state.user.token);

    let inputState;

    const updateInput = () => {
      inputState = {
        title: title,
        color: color,
      }
      dispatch(setInput(inputState));
    }
    
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");
    return (
        <Modal
          show={tagsAddModalShow}
          onHide={() => dispatch(tagsAddClose())}
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
                await createTagFromApi(inputState, loginStatus);
                dispatch(endListTags(await listTagsFromApi(getPageDate(), loginStatus)));
                dispatch(addClose())
              }}
            >
                <Form.Group className="d-flex flex-row row mb-3" controlId="eventTitle">
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
  
  export default TagAddModal;