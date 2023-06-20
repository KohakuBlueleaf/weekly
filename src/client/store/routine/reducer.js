const initRoutineState = {
    routine: [],
    title: '',
    type: '',
    year: -1,
    month: -1,
    day: -1,
    week: -1,
    timeStart: -1,
    timeEnd: -1,
    tags: [],
    location: '',
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
    case 'ROUTINE_SET_INPUT':
      return {
        ...state,
        type: action.input.type,
        title: action.input.title,
        year: action.input.year,
        month: action.input.month,
        day: action.input.day,
        week: action.input.week,
        tags: action.input.tags,
        timeStart: action.input.timeStart,
        timeEnd: action.input.timeEnd,
        location: action.input.location,
      }
    case 'ROUTINE_TIME_LINE_MODAL_TOGGLE':
      return {
        ...state,
        type: action.item.type,
        title: action.item.title,
        year: action.item.year,
        month: action.item.month,
        day: action.item.day,
        week: action.item.week,
        tag: action.item.tag,
        timeStart: action.item.timeStart,
        timeEnd: action.item.timeEnd,
        location: action.item.location,
        timeLineModalShow: true,
      }
    case 'ROUTINE_TIME_LINE_MODAL_CLOSE':
      return {
        ...state,
        timeLineModalShow: false,
      }
    case 'END_LIST_ROUTINE':
      return {
        ...state,
        routine: action.routineData,
      }
    default:
      return state;
  }
};

export default routineReducer;