import { CATEGORIES_TYPES } from "./categories.types";
export const INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  if (action.type === CATEGORIES_TYPES.MOUNT_CATEGORIES) {
    return action.payload;
  }
  return state;
};
