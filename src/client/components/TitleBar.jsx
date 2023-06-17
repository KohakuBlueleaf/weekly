import React from 'react';

import { Link, useNavigate, useLocation, Route, Routes} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TitleBar() {
    const navigate = useNavigate();
    const currentLocation = useLocation();

    return (
        <Container fluid>
        <Navbar expand="sm" variant="light" bg="light" className='mr-auto navbar'>
            <Container fluid>
            <Navbar.Brand href="#">Weekly</Navbar.Brand>
            {!/settings$/.test(currentLocation.pathname) && !/tags$/.test(currentLocation.pathname) && <button className="rounded-circle btn btn-outline-success" type="submit">Filter</button>}
            {/tags$/.test(currentLocation.pathname) && <button className="rounded-circle btn btn-outline-warning" type="submit">Theme</button>}
            </Container>
        </Navbar>
        </Container>
    );
}

export default TitleBar;