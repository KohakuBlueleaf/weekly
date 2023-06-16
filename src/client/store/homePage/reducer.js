const initHomePageState = {
    addModalShow: false,
};

const homePageReducer = (state = initHomePageState, action) => {
  switch (action.type) {
    case 'ADD_TOGGLE':
      return {
        ...state,
        addModalShow: true,
      }
    case 'ADD_CLOSE':
      return {
        ...state,
        addModalShow: false,
      }
    default:
      return state;
  }
};

export default homePageReducer;