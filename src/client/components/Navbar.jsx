import React from 'react';

import { Link, useNavigate, Routes, Route, useLocation} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from 'react-bootstrap';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import { navToggle, navClose } from '../store/navbar/action';
import { connect, useSelector, useDispatch } from 'react-redux';

import { addToggle } from '../store/homePage/action';
import { addToggle as addToggle_event } from "../store/event/action"
import { tagsAddToggle } from '../store/tags/action';
import { addToggle as todoAddToggle } from '../store/todo/action';
import { helpToggle } from '../store/help/action';
import ManTab from './ManTab';
import NavbarProfile from './NavbarProfile';
import '../style/navbar.css'

import { RxHome, RxQuestionMarkCircled } from "react-icons/rx";
import { GrTag, GrAddCircle } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"; 
import { MdAddCircleOutline, MdAddCircle } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";

const OffcanvasExample = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentLocation = useLocation();

  const {
    navshow,
  } = useSelector((state) => ({
    navshow: state.navbar.navshow,
  }));

  // useEffect(()=>{
  //   console.log('URL: ', document.URL);
  //   console.log('regular exp: ', /settings$/.test(document.URL));
  // })

  let handleAddClick = () => {
    if (/management$/.test(currentLocation.pathname)) {
      dispatch(addToggle_event());
    }
    else if (/management\/todo$/.test(currentLocation.pathname)) {
      dispatch(todoAddToggle());
    }
    else if (/tags$/.test(currentLocation.pathname)) {
      dispatch(tagsAddToggle());
    }
    else {
      dispatch(addToggle());
    }
  }

  const navclose = () => {
    dispatch(navClose());
  }

  const hadleHelpClick = () => {
    dispatch(helpToggle());
  }

  return (
    <Navbar bg="light" expand={false} className="mt-auto navbar bg-transparent">
      <Container fluid className='d-flex flex-row'>
        <Navbar.Toggle aria-controls={`offcanvasNavbar`} onClick={() => dispatch(navToggle())} />
        {/\/$/.test(currentLocation.pathname) && <Link className="nav-link" to='/daily' onClick={navclose}><IoIosArrowUp className='navbar-arrow'/></Link>}
        {/\/daily$/.test(currentLocation.pathname) && <Link className="nav-link" to='/' onClick={navclose}><IoIosArrowDown className='navbar-arrow'/></Link>}
        {(/management$/.test(currentLocation.pathname) || /management\/routine$/.test(currentLocation.pathname) || /management\/todo$/.test(currentLocation.pathname)) && <ManTab></ManTab>}
        {!/settings$/.test(currentLocation.pathname) && 
          <div className='navbar-add-icon'>
            <MdAddCircleOutline className='add-1' onClick={handleAddClick}/>
            <MdAddCircle className='add-2' onClick={handleAddClick}/>
          </div>
        }
        <Navbar.Offcanvas
          className='smoffcanvas'
          show={navshow}
          onHide={navclose}
          id={`offcanvasNavbar`}
          aria-labelledby={`offcanvasNavbarLabel`}
          placement="start"
        >
          <Offcanvas.Header>
            <Offcanvas.Title id={`offcanvasNavbarLabel`}>
              Weekly
            </Offcanvas.Title>
          </Offcanvas.Header>
          <NavbarProfile authStatus={props.authStatus} signOut={props.signOut}/>
          <Offcanvas.Body className='d-flex flex-column'>
            <div className='write-down-sth-wrapper'>
              <EditTextarea
                className='write-down-sth'
                placeholder='write down something!'
                onChange={(content)=>{console.log('edit', content)}}
                onSave={(content)=>{console.log('save', content)}}
                onClick={()=>{console.log('click')}}
              />
            </div>
            <Nav className="justify-content-end flex-grow-1 pe-3 nav-link-wrapper">
              <Link className="nav-link" to='/' onClick={navclose}><RxHome className='nav-link-icon'/>Home</Link>
              <Link className="nav-link" to='/management' onClick={navclose}><ImNewspaper className='nav-link-icon'/>Management</Link>
              <Link className="nav-link" to='/tags' onClick={navclose}><GrTag className='nav-link-icon'/>Tags</Link>
              <Link className="nav-link" onClick={hadleHelpClick}><RxQuestionMarkCircled className='nav-link-icon'/>Helps</Link>
              <Link className="nav-link" to='/settings' onClick={navclose}><FiSettings className='nav-link-icon'/>Settings</Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default OffcanvasExample;