import { Dispatch } from "react";
import { CategoryAction, CategoryActionTypes } from "../../types/category";
import axios from "axios";

export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    try {
      const response = await axios.get("http://localhost:5000/category");
      console.log("response", response);
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORIES,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORIES_ERROR,
        payload: "Произошла ошибка при загрузке треков",
      });
    }
  };
};
