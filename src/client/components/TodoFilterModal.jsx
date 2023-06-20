import React from 'react';
import { useEffect } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

import { connect, useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { endListTodos, filterClose } from "../store/todo/action";
import { listTodos as listTodosFromApi } from '../api/todo';
import { getPageDate } from '../utils';

const TodoFilterModal = () => {
    const [user, authStatus] = useOutletContext();
    const loginStatus = useSelector((state) => state.user.token);
    const dispatch = useDispatch();
  
    const {
        filterModalShow,
        completedShowFilter
    } = useSelector((state) => ({
        filterModalShow: state.todo.filterModalShow,
        completedShowFilter: state.todo.completedShowFilter,
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
                dispatch(endListTodos(await listTodosFromApi(getPageDate(), loginStatus, completedShowFilter)))
                dispatch(filterClose());
            }}
              >
                  
                  <Form.Check
                      className='lgcheckbox d-flex flex-row mb-3'
                      type={'checkbox'}
                      id={`default-checkbox`}
                      checked={completedShowFilter ? true : false}
                      label={`Display checked`}
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
  
  export default TodoFilterModal;