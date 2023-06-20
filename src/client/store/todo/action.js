import { listTodos as listTodosFromApi } from "../../api/todo"
import { createTodo as createTodoFromApi } from "../../api/todo"

export function addToggle() {
  return {
      type: 'TODO_ADD_TOGGLE'
  }
}

export function addClose() {
  return {
    type: 'TODO_ADD_CLOSE'
  }
}

export function filterToggle() {
  return {
      type: 'TODO_FILTER_TOGGLE'
  }
}

export function filterClose() {
  return {
    type: 'TODO_FILTER_CLOSE'
  }
}


export function endListTodos(todos) {
  return {
    type: 'END_LIST_TODOS',
    todos
  }
}

export function setInput(input) {
  return {
    type: 'SET_INPUT',
    input
  }
}

export function todoFilterCompletedToggle() {
  return {
    type: 'TODO_FILTER_COMPLETED_TOGGLE'
  }
}