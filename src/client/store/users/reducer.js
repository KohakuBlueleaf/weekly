import { SET_STATUS, SET_MEMO } from "./action_type";

const initialState = {
  token: '',
  memo: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        token: action.payload,
      }
    case SET_MEMO:
      return {
        ...state,
        memo: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;