const initNavbarState = {
    navshow: false,
};

const navbarReducer = (state = initNavbarState, action) => {
  switch (action.type) {
    case 'NAV_TOGGLE':
      return {
        ...state,
        navshow: true,
      }
    case 'NAV_CLOSE':
      return {
        ...state,
        navshow: false,
      }
    default:
      return state;
  }
};

export default navbarReducer;