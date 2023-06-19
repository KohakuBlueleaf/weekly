import React from 'react';
import { useEffect, useState } from 'react';

import { connect, useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';

import '../style/homePage.css';

const HomeAddModalTag = (props) => {  
    const {
        tags,
    } = useSelector((state) => ({
        tags: state.tags.tags
    }));
    
    return (
        <Form.Group className="d-flex flex-row row mb-3" controlId="eventTag">
            <Form.Label className='col-2 align-self-center m-0'>Tag:</Form.Label>
            <div className='col-10'>
                <Form.Select aria-label="Default select example" 
                onChange={(e) => {props.setTag(e.target.value); props.updateInput()}}>
                <option>select a tag</option>
                {
                    tags.map((item, index) => {
                        return (
                            <option key={item.id} value={item.id}>{item.title}</option>
                        )
                    })
                }
              </Form.Select>
            </div>
        </Form.Group>
    );
};
  
export default HomeAddModalTag;