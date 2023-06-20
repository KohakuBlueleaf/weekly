import React from 'react';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import DailyTodoList from './DailyTodoList';

import "../style/daily.css";

const DailyTodo= () => {
    
    return (
        <Form className='container h-100 todo-card-wrapper d-flex flex-column'>
            <Card className='todo-card h-100'>
                <Card.Body className='d-flex flex-column p-0 h-100'>

                    <div className='todo-title'>Todo</div>

                    <DailyTodoList/>

                </Card.Body>
            </Card>
        </Form>
    ) 
}

export default DailyTodo;