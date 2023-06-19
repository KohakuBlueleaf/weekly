import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";

import { addMessage, cleanMessage } from '../store/posts/action';
import SetAccount from '../components/SetAccount';
import SetCalendarStyle from '../components/SetCalendarStyle';
import SetMore from '../components/SetMore';
import SetProfile from '../components/SetProfile';

const Settings = (props) => {
  return (
    <div>
      <SetProfile authStatus={props.authStatus} signOut={props.signOut}/>
      <SetCalendarStyle></SetCalendarStyle>
      <SetMore></SetMore>
    </div>
  )
}

export default Settings;