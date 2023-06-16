import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TitleBar() {
  return (
    <Container fluid>
      <Navbar expand="sm" variant="light" bg="light" className='mr-auto navbar'>
        <Container fluid>
          <Navbar.Brand href="#">Weekly</Navbar.Brand>
          {!/settings$/.test(document.URL) && <button className=" btn btn-outline-success" type="submit">(SwipeUp)</button>}
        </Container>
      </Navbar>
    </Container>
  );
}

export default TitleBar;