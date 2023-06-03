import { ADD_MESSAGE, CLEAN_MESSAGE } from "./action_type";

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const cleanMessage = () => ({
  type: CLEAN_MESSAGE,
})