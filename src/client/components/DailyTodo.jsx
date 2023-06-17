import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

const DailyTodo= () => {
    
    return (
        <Form>
            <div className="mb-3">
                <Form.Check // prettier-ignore
                    type={'checkbox'}
                    id={`default`}
                    label={`default`}
                />

                <Form.Check
                    disabled
                    type={'checkbox'}
                    id={`disabled-default`}
                    label={`disabled`}
                    
                />
            </div> 
        </Form>
        
        
    ) 
}

export default DailyTodo;