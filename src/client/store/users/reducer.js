import { SET_STATUS } from "./action_type";

const initialState = {
  token: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        token: action.payload,
      }
    default:
      return state;
  }
};

export default userReducer;