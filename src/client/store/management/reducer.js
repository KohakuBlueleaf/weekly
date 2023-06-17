const initManagementState = {
    addModalShow: false,
};

const managementReducer = (state = initManagementState, action) => {
    switch (action.type) {
      case 'MANAGEMENT_ADD_TOGGLE':
        return {
          ...state,
          addModalShow: true,
        }
      case 'MANAGEMENT_ADD_CLOSE':
        return {
          ...state,
          addModalShow: false,
        }
      default:
        return state;
    }
  };
  
  export default managementReducer;