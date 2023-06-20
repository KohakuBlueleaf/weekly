import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { useOutletContext } from "react-router-dom";
import TimeLine from "../components/TimeLine";

import HomeAddModal from '../components/HomeAddModal';
import HomeFilterModal from '../components/HomeFilterModal';

import "../style/homePage.css"

/**
 * Renders a Home component with a title "Home page" 
 * and logs the user and authentication status on mount.
 *
 * @returns {JSX.Element} The Home component.
 */
const Home = () => {
  const [user, authStatus] = useOutletContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const {
    addModalShow,
    filterModalShow,
  } = useSelector((state) => ({
    addModalShow: state.homePage.addModalShow,
    filterModalShow: state.homePage.filterModalShow,
  }));
  
  return (
    <div className='homepage'>
      <TimeLine/>
      <HomeAddModal/>
      <HomeFilterModal/>
    </div>
  );
};

export default Home;
