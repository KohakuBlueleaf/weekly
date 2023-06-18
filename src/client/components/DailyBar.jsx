import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ProgressBar from 'react-bootstrap/ProgressBar';

const DailyBar = () => {
    const date = new Date();
    let display_year = date.getFullYear();
    let display_month = date.getMonth()+1;
    let display_day = date.getDate(); 
    const now = 60;
    return (
        
        <Container fluid>
            <Row className='d-flex'>
                <Col xs={3} md={2} lg={1}>
                    {display_year}.{display_month}.{display_day}
                </Col>    
                <Col xs={9} md={10} lg={11}>
                    <ProgressBar now={now} label={`${now}%`}/>
                </Col>    
            </Row>
        </Container>
    ) 
}

export default DailyBar;