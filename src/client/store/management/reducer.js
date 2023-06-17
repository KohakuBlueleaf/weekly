const initManagementState = {
    addModalShow: false,
    curpage: 'event',
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
      case 'MANAGEMENT_TO_EVENT_PAGE':
        return {
          ...state,
          curpage: 'event',
        }
        case 'MANAGEMENT_TO_ROUTINE_PAGE':
      return {
        ...state,
        curpage: 'routine',
      }
      case 'MANAGEMENT_TO_TODO_PAGE':
      return {
        ...state,
        curpage: 'todo',
      }
      default:
        return state;
    }
  };
  
  export default managementReducer;