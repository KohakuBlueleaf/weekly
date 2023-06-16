import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setStatus } from '../store/users/actions';

import { Container, Row, Col } from 'react-bootstrap';
import OffcanvasExample from '../components/offcanvasexample'
import TitleBar from '../components/TitleBar';

import { useAuthenticator } from '@aws-amplify/ui-react';
import '../style/default.css';


const DefaultLayout = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const loginStatus = useSelector((state) => state.user.login);
  const dispatch = useDispatch();

  useEffect(() => {
    const userStatus = async () => {
      let data = await fetch("/api/user", {
        method: "GET",
        headers: {
          "idToken": user.getSignInUserSession().getIdToken().getJwtToken(),
        }
      });
      console.log(data)
    }
    if(authStatus === "authenticated"){
      userStatus().catch(console.error);
      dispatch(setStatus(true));
      console.log("authenticated", loginStatus)
    }else if(authStatus === "unauthenticated"){
      console.log("unauthenticated", loginStatus)
      if(loginStatus){
        dispatch(setStatus(false));
        location.reload();
      }
    }
  })

  return (
<<<<<<< HEAD
    <Container fluid className='m-0 p-0 h-100 d-flex flex-column flex-row'>
=======
    <Container fluid className='m-0 p-0 h-100 d-flex flex-column'>
>>>>>>> 9084200d9885279c7e292a5fd37c31e084176aae
      <TitleBar></TitleBar>
      <div className='m-4'>
        <h1>Default Layout</h1>
        <Outlet context={[user, authStatus]}/>
      </div>
      <OffcanvasExample user={user} authStatus={authStatus} signOut={signOut}></OffcanvasExample>
    </Container>
  )
};

export default DefaultLayout;