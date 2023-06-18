import React from 'react';

import { Link, useNavigate, Routes, Route, useLocation} from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { navClose } from '../store/navbar/action';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/navbar.css'

const NavbarProfile = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    let cardCallBack;
    if(props.authStatus==='authenticated'){
        cardCallBack = 1
    }else{
        cardCallBack = 0
    }
  
    return (
        <Card
            className='signInCard'
            onClick={cardCallBack === 1 ? async ()=>{props.signOut()} : ()=>{dispatch(navClose()); navigate('/login')}}
        >
            {/* <Card.Img variant="top" src="" /> */}
            <Card.Body className='d-flex flex-row'>
                <span className='signInCardText align-self-center'>{cardCallBack === 1 ? 'UserName' : 'Log in'}</span>
            </Card.Body>
        </Card>
    )
  }
  
  export default NavbarProfile;