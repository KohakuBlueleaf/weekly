const initHomePageState = {
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
    filterModalShow: false,
    timeLineModalShow: false,
    timeLineTitleModalShow: false,
    eventFilter: true,
    routineFilter: true,
};

const homePageReducer = (state = initHomePageState, action) => {
  switch (action.type) {
    case 'HOME_ADD_TOGGLE':
      return {
        ...state,
        addModalShow: true,
      }
    case 'HOME_ADD_CLOSE':
      return {
        ...state,
        addModalShow: false,
      }
    case 'HOME_FILTER_TOGGLE':
      return {
        ...state,
        filterModalShow: true,
      }
    case 'HOME_FILTER_CLOSE':
      return {
        ...state,
        filterModalShow: false,
      }
    case 'TIME_LINE_MODAL_TOGGLE':
      console.log("action.item: sdjhasjkdhbasjkdhasjkd", action.item);
      return {
        ...state,
        type: action.item.type,
        title: action.item.title,
        year: action.item.year,
        month: action.item.month,
        day: action.item.day,
        week: action.item.week,
        tags: action.item.tags,
        timeStart: action.item.timeStart,
        timeEnd: action.item.timeEnd,
        location: action.item.location,
        timeLineModalShow: true,
      }
    case 'TIME_LINE_MODAL_CLOSE':
      return {
        ...state,
        timeLineModalShow: false,
      }
    case 'TIME_LINE_TITLE_MODAL_TOGGLE':
      return {
        ...state,
        timeLineTitleModalShow: true,
      }
    case 'TIME_LINE_TITLE_MODAL_CLOSE':
      return {
        ...state,
        timeLineTitleModalShow: false,
      }
    case 'HOME_EVENT_FILTER_TOGGLE':
      return {
        ...state,
        eventFilter: !state.eventFilter,
      }
    case 'HOME_ROUTINE_FILTER_TOGGLE':
      return {
        ...state,
        routineFilter: !state.routineFilter,
      }
    default:
      return state;
  }
};

export default homePageReducer;