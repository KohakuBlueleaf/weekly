import React from 'react';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import DailyTodoList from './DailyTodoList';

import "../style/daily.css";

const DailyTodo= () => {
    
    return (
        <Form className='container h-33 todo-card-wrapper d-flex flex-column'>
            <Card className='todo-card'>
                <Card.Body className='d-flex flex-column p-0 h-100'>

                    <div className='todo-title'>Todo</div>

                    <DailyTodoList/>

                </Card.Body>
            </Card>
        </Form>
    ) 
}

export default DailyTodo;