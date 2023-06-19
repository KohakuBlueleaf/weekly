export function addToggle() {
  return {
    type: 'ROUTINE_ADD_TOGGLE'
  }
}

export function addClose() {
  return {
    type: 'ROUTINE_ADD_CLOSE'
  }
}

export function timeLineModalToggle(title) {
  return {
    type: 'TIME_LINE_MODAL_TOGGLE',
    title
  }
}

export function timeLineModalClose() {
  return {
    type: 'TIME_LINE_MODAL_CLOSE'
  }
}