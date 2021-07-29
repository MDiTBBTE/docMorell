import {
  ArticleAction,
  ArticleActionTypes,
  ArticleState,
} from "../../types/article";

const initialState: ArticleState = {
  articles: [],
  articleError: "",
};

export const articleReducer = (
  state = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case ArticleActionTypes.FETCH_ARTICLES_ERROR:
      return { ...state, articleError: action.payload };
    case ArticleActionTypes.FETCH_ARTICLES:
      return { articleError: "", articles: action.payload };
    default:
      return state;
  }
};
