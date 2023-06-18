import React from 'react';
import { useEffect } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

import { connect, useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { filterClose } from "../store/event/action"

const EventFilterModal = () => {
    const [user, authStatus] = useOutletContext();
    const dispatch = useDispatch();
  
    const {
        filterModalShow,
    } = useSelector((state) => ({
        filterModalShow: state.event.filterModalShow
    }));
  
    return (
        <Modal
          show={filterModalShow}
          onHide={() => dispatch(filterClose())}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
      >
          <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
              Filter
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form className=''>
                  <Form.Check
                      className='lgcheckbox d-flex flex-row mb-3'
                      type={'checkbox'}
                      id={`default-checkbox`}
                      label={`Routine`}
                  />

                  <Form.Check
                      className='lgcheckbox d-flex flex-row mb-3'
                      type={'checkbox'}
                      id={`default-checkbox`}
                      label={`Event`}
                  />

                  <Form.Check
                      className='lgcheckbox d-flex flex-row mb-3'
                      type={'checkbox'}
                      id={`default-checkbox`}
                      label={`Completed`}
                  />


              </Form>
          <Modal.Footer>
              <Button variant="primary" type="submit">
                  Ok
              </Button>
          </Modal.Footer>
          </Modal.Body>
      </Modal>
    );
  };
  
  export default EventFilterModal;