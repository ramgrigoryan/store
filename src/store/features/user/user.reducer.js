import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {};

export const userReducer = (state = INITIAL_STATE, action) => {
  if (action.type === USER_ACTION_TYPES.SET_CURRENT_USER) return action.payload;
  return state;
};
