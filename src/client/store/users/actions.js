import { SET_STATUS, SET_MEMO } from "./action_type";

export const setStatus = (status) => ({
  type: SET_STATUS,
  payload: status,
})

export const setMemo = (memo) => ({
  type: SET_MEMO,
  payload: memo,
})