import React from 'react';

import { Link, useNavigate, useLocation, Route, Routes} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { connect, useSelector, useDispatch } from 'react-redux';
import { filterToggle, filterClose } from '../store/homePage/action';
import { tagsAddToggle, tagsThemeToggle } from '../store/tags/action';

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
                {/tags$/.test(currentLocation.pathname) && <button className="rounded-circle btn btn-outline-warning" type="submit" onClick={() => dispatch(tagsThemeToggle())}>Theme</button>}
                </Container>
        </Navbar>
        </Container>
    );
}

export default TitleBar;