import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import DailyBar from '../components/DailyBar';
import DailyTree from '../components/DailyTree';
import DailyTodo from '../components/DailyTodo';

function Daily() {
  return (
    <div>
        <DailyBar></DailyBar>
        <DailyTree></DailyTree>
        <DailyTodo></DailyTodo>
    </div>
  )
}

export default Daily;