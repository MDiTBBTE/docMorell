import {
  CategoryAction,
  CategoryActionTypes,
  CategoryState,
} from "../../types/category";

const initialState: CategoryState = {
  categories: [],
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
      return { error: "", categories: action.payload };
    default:
      return state;
  }
};
