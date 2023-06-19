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

export function routineTimeLineModalToggle(item) {
  console.log("get routinendlaskndasklndaskldn~~~~~~~~~", item);
  return {
    type: 'ROUTINE_TIME_LINE_MODAL_TOGGLE',
    item
  }
}

export function routineTimeLineModalClose() {
  return {
    type: 'ROUTINE_TIME_LINE_MODAL_CLOSE'
  }
}

export function endListRoutines(routineDate) {
  return {
    type: 'END_LIST_ROUTINE',
    routineDate
  }
}