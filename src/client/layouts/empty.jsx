import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

const EmptyLayout = () => {
  return (
    <Container fluid className='m-0 p-0'>
      <Outlet/>
    </Container>
  )
};

export default EmptyLayout;