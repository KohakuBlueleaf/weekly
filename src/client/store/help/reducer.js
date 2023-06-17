const initHelpState = {
    helpModalShow: false,
};

const helpReducer = (state = initHelpState, action) => {
    switch (action.type) {
      case 'HELP_TOGGLE':
        return {
          ...state,
          helpModalShow: true,
        }
      case 'HELP_CLOSE':
        return {
          ...state,
          helpModalShow: false,
        }
      default:
        return state;
    }
  };
  
  export default helpReducer;