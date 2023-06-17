const initialPostState = {
  event: [],
  routine: [],
  todo: [],
  filter: {
    searchText: '',
    routine: false,
    event: false,
    completed: false
  }
};

const postReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        event: [...state.post, action.payload],
      };
    case 'CLEAN_MESSAGE':
      return {
        ...state,
        event: [],
      }
    default:
      return state;
  }
};

export default postReducer;