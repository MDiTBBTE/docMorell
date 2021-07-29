export interface IArticle {
  _id: string;
  title: string;
  text: string;
  date: string;
  picture: string;
}

export interface ArticleState {
  articles: IArticle[];
  articleError: string;
}

export enum ArticleActionTypes {
  FETCH_ARTICLES = "FETCH_ARTICLES",
  FETCH_ARTICLES_ERROR = "FETCH_ARTICLES_ERROR",
}

interface FetchCategoriesAction {
  type: ArticleActionTypes.FETCH_ARTICLES;
  payload: IArticle[];
}

interface FetchCategoriesErrorAction {
  type: ArticleActionTypes.FETCH_ARTICLES_ERROR;
  payload: string;
}

export type ArticleAction = FetchCategoriesAction | FetchCategoriesErrorAction;
