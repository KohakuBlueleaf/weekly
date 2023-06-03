const initialState = {
  messages: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export const addMessage = (message) => ({
  type: 'ADD_MESSAGE',
  payload: message,
});


export {postReducer, addMessage};