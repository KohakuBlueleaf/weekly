import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { withAuthenticator } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';


/**
 * Renders the Login component which checks the authentication status. 
 * 
 * @return {JSX.Element} An empty JSX element.
 */
const Login = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(authStatus === 'authenticated'){
      navigate('/');
    }
  })
  
  return (<div></div>);
};

export default withAuthenticator(Login);