import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import Nav from 'react-bootstrap/Nav';
import ManTab from '../components/ManTab';
import EventList from '../components/EventList';

function Event() {
  return (
    <div>
      <EventList></EventList>
    </div>
  )
}

export default Event;