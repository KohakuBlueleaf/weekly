import React from 'react';

import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {boxicons} from 'boxicons';
import {FaEquals, FaCircle} from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { from } from 'webpack-sources/lib/CompatSource';
const SetCalendarStyle = () => {
    return (
        <div>
            <p>More settings</p>
            <ListGroup vertical>
                <ListGroup.Item>
                    <div>
                        <div className='d-flex flex-row justify-content-between'>Language<RxChevronDown></RxChevronDown></div>
                        English
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>Contact us</ListGroup.Item>
                        
            </ListGroup>
        </div>
    )
  
}

export default SetCalendarStyle;