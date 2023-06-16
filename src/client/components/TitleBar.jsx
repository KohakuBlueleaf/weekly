import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TitleBar() {
  return (
    <Container fluid className='d-flex'>
      <Navbar expand="sm" variant="light" bg="light" className='mr-auto navbar'>
        <Container>
          <Navbar.Brand href="#">Weekly</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default TitleBar;