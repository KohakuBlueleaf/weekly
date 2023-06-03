import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useOutletContext } from "react-router-dom";


/**
 * Renders a Home component with a title "Home page" 
 * and logs the user and authentication status on mount.
 *
 * @returns {JSX.Element} The Home component.
 */
const Home = () => {
  const [user, authStatus] = useOutletContext();
  const navigate = useNavigate();
  
  //Will be executed when this component be rendered
  useEffect(()=>{
    console.log(user, authStatus);
  })
  
  return (
    <div>
      <h2>Home page</h2>
    </div>
  );
};

export default Home;