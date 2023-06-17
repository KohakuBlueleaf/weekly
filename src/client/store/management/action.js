export function addToggle() {
  return {
      type: 'MANAGEMENT_ADD_TOGGLE'
  }
}

export function addClose() {
  return {
    type: 'MANAGEMENT_ADD_CLOSE'
  }
}

export function toEvent() {
  return {
    type: 'MANAGEMENT_TO_EVENT_PAGE'
  }
}

export function toRoutine() {
  return {
    type: 'MANAGEMENT_TO_ROUTINE_PAGE'
  }
}

export function toTodo() {
  return {
    type: 'MANAGEMENT_TO_TODO_PAGE'
  }
}