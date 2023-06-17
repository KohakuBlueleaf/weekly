import React from 'react';

import { Link, useNavigate, useLocation, Route, Routes} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { connect, useSelector, useDispatch } from 'react-redux';
import { filterToggle } from '../store/homePage/action';
import { filterToggle as eventFilterToggle } from '../store/event/action';
import { filterToggle as todoFilterToggle } from '../store/todo/action'; 
import { tagsThemeToggle } from '../store/tags/action';

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

    const handleFilterClick = () => {
      if (/management$/.test(currentLocation.pathname)) {
        dispatch(eventFilterToggle());
      }
      else if (/management\/todo$/.test(currentLocation.pathname)) {
        console.log("hi~~~~~");
        dispatch(todoFilterToggle());
      }
      else if (/tags$/.test(currentLocation.pathname)) {
        dispatch(tagsFilterToggle())
      }
      else {
        dispatch(filtertoggle());
      }
    }

    return (
        <Container fluid>
        <Navbar expand="sm" variant="light" bg="light" className='mr-auto navbar'>
            <Container fluid>
                <Navbar.Brand href="#">Weekly</Navbar.Brand>
                {!/settings$/.test(currentLocation.pathname) && !/tags$/.test(currentLocation.pathname) && <button className="rounded-circle btn btn-outline-success" type="submit" onClick={handleFilterClick}>Filter</button>}
                {/tags$/.test(currentLocation.pathname) && <button className="rounded-circle btn btn-outline-warning" type="submit" onClick={() => dispatch(tagsThemeToggle())}>Theme</button>}
                </Container>
        </Navbar>
        </Container>
    );
}

export default TitleBar;