import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from 'react-bootstrap';
import { MdAdd } from "react-icons/Md";

const OffcanvasExample = (props) => {
  const navigate = useNavigate();

  let button;
  if(props.authStatus==='authenticated'){
    button = <Button onClick={async ()=>{props.signOut();}}>Sign out</Button>
  }else{
    button = <Button onClick={()=>{navigate('/login')}}>Sign in</Button>
  }

  // useEffect(()=>{
  //   console.log('URL: ', document.URL);
  //   console.log('regular exp: ', /settings$/.test(document.URL));
  // })

  return (
    <Navbar bg="light" expand={false} className="mt-auto navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar`} />

        {!/settings$/.test(document.URL) && <button className="rounded-circle btn btn-outline-danger" type="submit">Add</button>}
        <Navbar.Offcanvas
          id={`offcanvasNavbar`}
          aria-labelledby={`offcanvasNavbarLabel`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='d-flex flex-column'>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link className="nav-link" to='/'>Home</Link>
              <Link className="nav-link" to='/post'>Management</Link>
              <Link className="nav-link" to='/tags'>Tags</Link>
              <Link className="nav-link" to='/helps'>Helps</Link>
              <Link className="nav-link" to='/settings'>Settings</Link>
            </Nav>
            {button}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default OffcanvasExample;