import React, { useEffect } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setStatus } from './store/users/actions';
import { useAuthenticator } from '@aws-amplify/ui-react';

import DefaultLayout from './layouts/default';
import EmptyLayout from './layouts/empty';
import Home from './pages/Home';
import Login from './pages/Login'
import Settings from './pages/Settings';
import Event from './pages/Event';
import Routine from './pages/Routine';
import Todo from './pages/Todo';
import Tags from './pages/Tags';
import Daily from './pages/Daily';

const Router = () => {
  const dispatch = useDispatch();
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const loginStatus = useSelector((state) => state.user.login);

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
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout user={user} authStatus={authStatus} signOut={signOut}/>}>
          <Route index={true} path="" element={<Home />} />
          <Route path="/daily" element={<Daily/>} />
          <Route path="/management" element={<Event/>} />
          <Route path="/management/routine" element={<Routine/>} />
          <Route path="/management/todo" element={<Todo/>} />
          <Route path="/tags" element={<Tags/>} />
          <Route path="settings" element={<Settings authStatus={authStatus} signOut={signOut}/>} />
          
          {/* Example for nested routes */}
          <Route path="test">
            {/* /test */}
            <Route index={true} element={<Event />} /> 
            {/* /test/event */}
            <Route index={false} path="event" element={<Event />} />
          </Route>
        </Route>
        <Route path="/login" element={<EmptyLayout/>}>
          <Route index={true} element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;