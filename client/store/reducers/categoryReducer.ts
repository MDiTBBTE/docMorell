import {
  CategoryAction,
  CategoryActionTypes,
  CategoryState,
} from "../../types/category";
import { changeCategoryStructure } from "../../utils/utils";

const initialState: CategoryState = {
  categories: [],
  changedCategories: [],
  filters: { category: "", type: "" },
  error: "",
};

export const categoryReducer = (
  state = initialState,
  action: CategoryAction
): CategoryState => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORIES_ERROR:
      return { ...state, error: action.payload };
    case CategoryActionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        error: "",
        categories: action.payload,
        changedCategories: changeCategoryStructure(action.payload),
      };
    case CategoryActionTypes.CHANGE_CATEGORIES:
      return { ...state, changedCategories: action.payload };
    case CategoryActionTypes.ADD_CATEGORIES:
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};
