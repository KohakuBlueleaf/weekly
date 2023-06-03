import {ADD_MESSAGE, CLEAN_MESSAGE} from './action_type';

const initialState = {
  messages: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case CLEAN_MESSAGE:
      return {
        ...state,
        messages: [],
      }
    default:
      return state;
  }
};

export default postReducer;