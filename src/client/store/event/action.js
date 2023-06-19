export function addToggle() {
  return {
      type: 'EVENT_ADD_TOGGLE'
  }
}

export function addClose() {
  return {
    type: 'EVENT_ADD_CLOSE'
  }
}

export function filterToggle() {
  return {
      type: 'EVENT_FILTER_TOGGLE'
  }
}

export function filterClose() {
  return {
    type: 'EVENT_FILTER_CLOSE'
  }
}

export function toEvent() {
  return {
    type: 'EVENT_TO_EVENT_PAGE'
  }
}

export function toRoutine() {
  return {
    type: 'EVENT_TO_ROUTINE_PAGE'
  }
}

export function toTodo() {
  return {
    type: 'EVENT_TO_TODO_PAGE'
  }
}

export function endListEventAll(eventData) {
  return {
    type: "END_LIST_EVENT_ALL",
    eventData
  }
}