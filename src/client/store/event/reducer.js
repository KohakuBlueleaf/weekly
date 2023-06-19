const initManagementState = {
    event_all: [],
    addModalShow: false,
    filterModalShow: false,
    curpage: 'event',
};

const eventReducer = (state = initManagementState, action) => {
    switch (action.type) {
      case 'EVENT_ADD_TOGGLE':
        return {
          ...state,
          addModalShow: true,
        }
      case 'EVENT_ADD_CLOSE':
        return {
          ...state,
          addModalShow: false,
        }
      case 'EVENT_FILTER_TOGGLE':
        return {
          ...state,
          filterModalShow: true,
        }
      case 'EVENT_FILTER_CLOSE':
        return {
          ...state,
          filterModalShow: false,
        }
      case 'EVENT_TO_EVENT_PAGE':
        return {
          ...state,
          curpage: 'event',
        }
      case 'EVENT_TO_ROUTINE_PAGE':
        return {
          ...state,
          curpage: 'routine',
        }
      case 'EVENT_TO_TODO_PAGE':
        return {
          ...state,
          curpage: 'todo',
        }
      default:
        return state;
    }
  };
  
  export default eventReducer;