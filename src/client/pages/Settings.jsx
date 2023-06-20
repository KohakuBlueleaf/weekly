import React from 'react';
import SetCalendarStyle from '../components/SetCalendarStyle';
import SetMore from '../components/SetMore';
import SetProfile from '../components/SetProfile';

const Settings = (props) => {
  return (
    <div>
      <SetProfile user={props.user} authStatus={props.authStatus} signOut={props.signOut}/>
      <SetCalendarStyle></SetCalendarStyle>
      <SetMore></SetMore>
    </div>
  )
}

export default Settings;