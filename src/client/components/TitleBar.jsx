import React from 'react';

import { useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { filterToggle } from '../store/homePage/action';
import { filterToggle as eventFilterToggle } from '../store/event/action';
import { filterToggle as todoFilterToggle } from '../store/todo/action'; 
import { tagsThemeToggle } from '../store/tags/action';
import { BsBrush } from "react-icons/bs";

import { FiFilter } from "react-icons/fi";

import "../style/titlebar.css"

function TitleBar() {
    const dispatch = useDispatch();
    const currentLocation = useLocation();

    const handleFilterClick = () => {
      if (/management$/.test(currentLocation.pathname)) {
        dispatch(eventFilterToggle());
      }
      else if (/management\/todo$/.test(currentLocation.pathname)) {
        console.log("hi~~~~~");
        dispatch(todoFilterToggle());
      }
      else {
        dispatch(filterToggle());
      }
    }

    return (
        <Container fluid className='titlebar'>
          <Navbar expand="sm" variant="light" bg="light" className='mr-auto navbar bg-transparent'>
              <Container fluid>
                  <Navbar.Brand href="/" className='navbar-brand'>
                    {/daily$/.test(currentLocation.pathname) ? 'Daily' : 'Weekly'}
                  </Navbar.Brand>
                  <div>
                    {!/settings$/.test(currentLocation.pathname) && !/tags$/.test(currentLocation.pathname) && !/management\/routine$/.test(currentLocation.pathname) ?
                     <FiFilter className='filter-icon' onClick={handleFilterClick}/>
                     :
                     !/settings$/.test(currentLocation.pathname) && !/management\/routine$/.test(currentLocation.pathname) && 
                     <BsBrush className='theme-icon' onClick={() => dispatch(tagsThemeToggle())}/>
                    }
                  </div>
              </Container>
          </Navbar>
        </Container>
    );
}

export default TitleBar;