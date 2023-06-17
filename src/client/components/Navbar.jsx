import React from 'react';

import { Link, useNavigate, Routes, Route, useLocation} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from 'react-bootstrap';

import { navToggle, navClose } from '../store/navbar/action';
import { connect, useSelector, useDispatch } from 'react-redux';

import { addToggle } from '../store/homePage/action';
import { addToggle as addToggle_management } from "../store/management/action"
import ManTab from './ManTab';

const OffcanvasExample = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentLocation = useLocation();

  const {
    navshow,
  } = useSelector((state) => ({
    navshow: state.navbar.navshow,
  }));

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

  const navclose = () => {
    dispatch(navClose());
  }

  return (
    <Navbar bg="light" expand={false} className="mt-auto navbar">
      <Container fluid className='d-flex flex-row'>
        <Navbar.Toggle aria-controls={`offcanvasNavbar`} onClick={() => dispatch(navToggle())} />
        {/\/$/.test(currentLocation.pathname) && <button className=" btn btn-outline-primary" type="submit">(SwipeUp)</button>}
        {/management$/.test(currentLocation.pathname) && <ManTab></ManTab>}
        {!/settings$/.test(currentLocation.pathname) && <button className="rounded-circle btn btn-outline-danger" type="submit" onClick={handleAddClick}>Add</button>}
        <Navbar.Offcanvas
          show={navshow}
          onHide={navclose}
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
              <Link className="nav-link" to='/' onClick={navclose}>Home</Link>
              <Link className="nav-link" to='/management' onClick={navclose}>Management</Link>
              <Link className="nav-link" to='/tags' onClick={navclose}>Tags</Link>
              <Link className="nav-link" to='/helps' onClick={navclose}>Helps</Link>
              <Link className="nav-link" to='/settings' onClick={navclose}>Settings</Link>
            </Nav>
            {button}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default OffcanvasExample;