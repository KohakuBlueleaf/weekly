import React from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';

import "../style/daily.css";

const DailyTodoList = () => {
    const dispatch = useDispatch();
    const {
        todos,
    } = useSelector((state) => ({
        todos: state.todo.todo
    }));
    
    return (
        <div className="mx-3 mb-3 daily-todo-list">
            {
                todos.map((item, index) => {
                    return (
                        <Form.Check // prettier-ignore
                            className='lgcheckbox-daily d-flex flex-row'
                            type={'checkbox'}
                            id={`default`}
                            label={`${item.title}`}
                        />
                    )
                })
            }
        </div> 
    ) 
}

export default DailyTodoList;