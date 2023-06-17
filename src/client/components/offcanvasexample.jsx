import React from 'react';

import { Link, useNavigate, Routes, Route, useLocation} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from 'react-bootstrap';

import { connect, useSelector, useDispatch } from 'react-redux';

import { addToggle } from '../store/homePage/action';
import { addToggle as addToggle_management } from "../store/management/action"

const OffcanvasExample = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentLocation = useLocation();

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

  let handleAddClick = () => {
    if (/management$/.test(currentLocation.pathname)) {
      dispatch(addToggle_management());
    }
    else if (/tags$/.test(currentLocation.pathname)) {

    }
    else {
      dispatch(addToggle());
    }
  }

  return (
    <Navbar bg="light" expand={false} className="mt-auto navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
        {/\/$/.test(currentLocation.pathname) && <button className=" btn btn-outline-primary" type="submit">(SwipeUp)</button>}
        {!/settings$/.test(currentLocation.pathname) && <button className="rounded-circle btn btn-outline-danger" type="submit" onClick={handleAddClick}>Add</button>}
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
              <Link className="nav-link" to='/management'>Management</Link>
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