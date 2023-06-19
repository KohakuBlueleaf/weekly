const initHomePageState = {
    title: '',
    addModalShow: false,
    filterModalShow: false,
    timeLineModalShow: false,
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
      return {
        ...state,
        title: action.title,
        timeLineModalShow: true,
      }
    case 'TIME_LINE_MODAL_CLOSE':
      return {
        ...state,
        timeLineModalShow: false,
      }
    default:
      return state;
  }
};

export default homePageReducer;