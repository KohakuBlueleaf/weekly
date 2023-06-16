import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { useOutletContext } from "react-router-dom";
import TimeLine from "../components/TimeLine";

import { addToggle, addClose } from '../store/homePage/action';


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
  } = useSelector((state) => ({
    addModalShow: state.homePage.addModalShow,
  }));

  //Will be executed when this component be rendered
  useEffect(()=>{
    console.log(user, authStatus);
  })
  
  return (
    <div>
      <h2>Home page</h2>
      <TimeLine/>
      <Modal
        show={addModalShow}
        onHide={() => dispatch(addClose())}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => dispatch(addClose())}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;