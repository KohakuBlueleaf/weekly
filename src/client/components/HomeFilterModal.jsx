import React from 'react';
import { useEffect } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

import { connect, useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { homeEventFilterToggle, homeRoutineFilterToggle } from '../store/homePage/action';
import { endListEvents } from '../store/posts/action';
import { getPageDate } from '../utils';
import { listEvents as listEventsFromApi } from '../api/event';

import { filterClose } from "../store/homePage/action"

const HomeFilterModal = () => {
    const [user, authStatus] = useOutletContext();
    const dispatch = useDispatch();

    const loginStatus = useSelector((state) => state.user.token);
  
    const {
        filterModalShow,
        eventFilter,
        routineFilter,
    } = useSelector((state) => ({
        filterModalShow: state.homePage.filterModalShow,
        eventFilter: state.homePage.eventFilter,
        routineFilter: state.homePage.routineFilter,
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
              <Form className=''
              onSubmit={async (e) => {
                e.preventDefault();
                console.log("eventfilter: ", eventFilter);
                console.log("routinefilter: ", routineFilter);
                dispatch(endListEvents(await listEventsFromApi(getPageDate(), loginStatus,
                {
                    eventDisplay: eventFilter,
                    routineDisplay: routineFilter,
                }))
                );
                dispatch(filterClose());
              }}
              >

                    <Form.Check
                      className='lgcheckbox d-flex flex-row mb-3'
                      type={'checkbox'}
                      id={`default-checkbox`}
                      label={`Event`}
                      checked={eventFilter ? true : false}
                      onClick={() => dispatch(homeEventFilterToggle())}
                      onChange={() => {}}
                    />

                    <Form.Check
                        className='lgcheckbox d-flex flex-row mb-3'
                        type={'checkbox'}
                        id={`default-checkbox`}
                        label={`Routine`}
                        checked={routineFilter ? true : false}
                        onClick={() => dispatch(homeRoutineFilterToggle())}
                        onChange={() => {}}
                    />

                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Ok
                        </Button>
                    </Modal.Footer>
              </Form>
          </Modal.Body>
      </Modal>
    );
  };
  
  export default HomeFilterModal;