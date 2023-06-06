import { SET_STATUS } from "./action_type";

const initialState = {
  login: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        login: action.payload,
      }
    default:
      return state;
  }
};

export default userReducer;