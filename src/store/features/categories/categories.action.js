import { CATEGORIES_TYPES } from "./categories.types";

export const setCategories = (categoriesMap) => ({
  type: CATEGORIES_TYPES.MOUNT_CATEGORIES,
  payload: categoriesMap,
});
