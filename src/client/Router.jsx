import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

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
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route index={true} path="" element={<Home />} />
          <Route path="/daily" element={<Daily/>} />
          <Route path="/management" element={<Event/>} />
          <Route path="/management/routine" element={<Routine/>} />
          <Route path="/management/todo" element={<Todo/>} />
          <Route path="/tags" element={<Tags/>} />
          <Route path="settings" element={<Settings />} />
          
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