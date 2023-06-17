import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TitleBar() {
    const navigate = useNavigate();

    return (
        <Container fluid>
        <Navbar expand="sm" variant="light" bg="light" className='mr-auto navbar'>
            <Container fluid>
            <Navbar.Brand href="#">Weekly</Navbar.Brand>
            {!/settings$/.test(document.URL) && !/tags$/.test(document.URL) && <button className="rounded-circle btn btn-outline-success" type="submit">Filter</button>}
            </Container>
        </Navbar>
        </Container>
    );
}

export default TitleBar;