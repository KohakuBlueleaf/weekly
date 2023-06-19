import React from 'react';

import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {boxicons} from 'boxicons';
import {RxChevronDown} from 'react-icons/rx';
import {FaToggleOff} from 'react-icons/fa'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { from } from 'webpack-sources/lib/CompatSource';
const SetCalendarStyle = () => {
    return (
        <div>
            <p>More settings</p>
            <ListGroup vertical='true'>
                <ListGroup.Item>
                    <div>
                        <div className='d-flex flex-row justify-content-between'>First day of the week<RxChevronDown></RxChevronDown></div>
                        Sunday
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div>
                        <div className='d-flex flex-row justify-content-between'>Focus on today<FaToggleOff></FaToggleOff></div>
                        today in the middle
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div>
                        <div className='d-flex flex-row justify-content-between'>Automatically update todo<FaToggleOff></FaToggleOff></div>
                        uncompleted todo will move to tomorrow
                    </div>
                    
                </ListGroup.Item>
                <ListGroup.Item>
                    <div>
                        <div className='d-flex flex-row justify-content-between'>Dark mode<FaToggleOff></FaToggleOff></div>
                    </div>
                </ListGroup.Item>
                        
            </ListGroup>
        </div>
    )
  
}

export default SetCalendarStyle;