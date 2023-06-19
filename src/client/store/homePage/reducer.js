const initHomePageState = {
    title: '',
    // year: -1,
    // month: -1,
    // day: -1,
    // week: -1,
    timeStart: -1,
    timeEnd: -1,
    tags: [],
    location: '',
    addModalShow: false,
    filterModalShow: false,
    timeLineModalShow: false,
    timeLineTitleModalShow: false,
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
      let temp = action.timeStart + action.duration;
      return {
        ...state,
        title: action.title,
        timeStart: action.timeStart,
        timeEnd: temp,
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
    default:
      return state;
  }
};

export default homePageReducer;