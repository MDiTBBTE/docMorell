import { Dispatch } from "react";
import { ArticleAction, ArticleActionTypes } from "../../types/article";
import axios from "axios";

export const fetchArticles = () => {
  return async (dispatch: Dispatch<ArticleAction>) => {
    try {
      const response = await axios.get("http://localhost:5000/article");
      dispatch({
        type: ArticleActionTypes.FETCH_ARTICLES,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ArticleActionTypes.FETCH_ARTICLES_ERROR,
        payload: "Произошла ошибка при загрузке треков",
      });
    }
  };
};
