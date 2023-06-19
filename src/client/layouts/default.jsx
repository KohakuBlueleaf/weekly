import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setStatus } from '../store/users/actions';

import { Container, Row, Col } from 'react-bootstrap';
import OffcanvasExample from '../components/Navbar'
import TitleBar from '../components/TitleBar';

import { useAuthenticator } from '@aws-amplify/ui-react';
import HelpModal from '../components/HelpModal';


const DefaultLayout = (props) => {
  return (

    <Container fluid className='m-0 p-0 h-100 d-flex flex-column flex-row max-h-100'>
      <TitleBar className='flex-shrink-0 w-100'></TitleBar>
      <div className='flex-shrink-1 overflow-auto m-2'>
        <Outlet context={[props.user, props.authStatus]}/>
      </div>
      <div className='flex-shrink-0 w-100 mt-auto'>
        <OffcanvasExample user={props.user} authStatus={props.authStatus} signOut={props.signOut}></OffcanvasExample>
      </div>
      
      <HelpModal/>
    </Container>
  )
};

export default DefaultLayout;