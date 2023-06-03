import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import OffcanvasExample from '../components/offcanvasexample'

import { useAuthenticator } from '@aws-amplify/ui-react';


const DefaultLayout = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  return (
    <Container fluid className='m-0 p-0'>
      <OffcanvasExample user={user} authStatus={authStatus} signOut={signOut}></OffcanvasExample>
      <div className='m-4'>
        <h1>Default Layout</h1>
        <Outlet context={[user, authStatus]}/>
      </div>
    </Container>
  )
};

export default DefaultLayout;