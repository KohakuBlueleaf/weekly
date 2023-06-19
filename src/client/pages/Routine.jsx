import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import Nav from 'react-bootstrap/Nav';
import ManTab from '../components/ManTab';
import RoutineAddModal from '../components/RoutineAddModal';

import TimeLineRoutine from '../components/RoutineList';

const Routine = () => {
  return (
    <div style={{'height': '100%', 'max-height': '100%'}}>
      <TimeLineRoutine/>
      <RoutineAddModal/>
    </div>
  )
}

export default Routine;