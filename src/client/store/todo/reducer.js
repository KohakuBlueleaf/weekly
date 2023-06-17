const initTodoState = {
    addModalShow: false,
    filterModalShow: false,
};

const todoReducer = (state = initTodoState, action) => {
    switch (action.type) {
      case 'TODO_ADD_TOGGLE':
        return {
          ...state,
          addModalShow: true,
        }
      case 'TODO_ADD_CLOSE':
        return {
          ...state,
          addModalShow: false,
        }
      case 'TODO_FILTER_TOGGLE':
        return {
          ...state,
          filterModalShow: true,
        }
      case 'TODO_FILTER_CLOSE':
        return {
          ...state,
          filterModalShow: false,
        }
      default:
        return state;
    }
  };
  
  export default todoReducer;