const initRoutineState = {
    title: '',
    addModalShow: false,
    timeLineModalShow: false,
};

const routineReducer = (state = initRoutineState, action) => {
  switch (action.type) {
    case 'ROUTINE_ADD_TOGGLE':
      return {
        ...state,
        addModalShow: true,
      }
    case 'ROUTINE_ADD_CLOSE':
      return {
        ...state,
        addModalShow: false,
      }
    case 'ROUTINE_TIME_MODAL_TOGGLE':
      return {
        ...state,
        title: action.title,
        timeLineModalShow: true,
      }
    case 'ROUTINE_TIME_MODAL_CLOSE':
      return {
        ...state,
        timeLineModalShow: false,
      }
    default:
      return state;
  }
};

export default routineReducer;