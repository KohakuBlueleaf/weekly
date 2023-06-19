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
import EventAddModal from '../components/EventAddModal';
import EventFilterModal from '../components/EventFilterModal';
import { toEvent } from '../store/event/action';

function Event() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toEvent());
  })

  return (
    <div>
      <EventList></EventList>
      <EventFilterModal/>
      <EventAddModal/>
    </div>
  )
}

export default Event;