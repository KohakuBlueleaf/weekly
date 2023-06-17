import React from 'react';

import { Link, useNavigate, useLocation, Route, Routes} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { connect, useSelector, useDispatch } from 'react-redux';
import { filterToggle, filterClose } from '../store/homePage/action';

import "../style/homePage.css"

function TitleBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentLocation = useLocation();

    const {
      filterModalShow,
    } = useSelector((state) => ({
      filterModalShow: state.homePage.filterModalShow,
    }));

    return (
        <Container fluid>
        <Navbar expand="sm" variant="light" bg="light" className='mr-auto navbar'>
            <Container fluid>
                <Navbar.Brand href="#">Weekly</Navbar.Brand>
                {!/settings$/.test(currentLocation.pathname) && !/tags$/.test(currentLocation.pathname) && <button className="rounded-circle btn btn-outline-success" type="submit" onClick={() => dispatch(filterToggle())}>Filter</button>}
                {/tags$/.test(currentLocation.pathname) && <button className="rounded-circle btn btn-outline-warning" type="submit">Theme</button>}
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
                </Container>
        </Navbar>
        </Container>
    );
}

export default TitleBar;