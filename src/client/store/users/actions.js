import { SET_STATUS } from "./action_type";

export const setStatus = (status) => ({
  type: SET_STATUS,
  payload: status,
})