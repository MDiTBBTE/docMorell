import { Dispatch } from "react";
import { CategoryAction, CategoryActionTypes } from "../../types/category";
import axios from "axios";

export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    try {
      const response = await axios.get("http://localhost:5000/category");
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORIES,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORIES_ERROR,
        payload: "Произошла ошибка при загрузке категорий",
      });
    }
  };
};

export const changeCategories = (categories) => {
  return {
    type: CategoryActionTypes.CHANGE_CATEGORIES,
    payload: categories,
  };
};

export const addFilters = (filters) => {
  return {
    type: CategoryActionTypes.ADD_CATEGORIES,
    payload: filters,
  };
};
