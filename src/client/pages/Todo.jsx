import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { toTodo } from '../store/event/action';
import TodoList from '../components/TodoList';
import TodoFilterModal from '../components/TodoFilterModal';
import TodoAddModal from '../components/TodoAddModal';

function Todo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toTodo());
  })

  return (
    <div>
      <TodoList></TodoList>
      <TodoAddModal/>
      <TodoFilterModal/>
    </div>
  )
}

export default Todo;