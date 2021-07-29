export interface ICategory {
  _id: string;
  title: string;
  types: string;
}

export interface CategoryState {
  categories: ICategory[];
  error: string;
}

export enum CategoryActionTypes {
  FETCH_CATEGORIES = "FETCH_CATEGORIES",
  FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR",
}

interface FetchCategoriesAction {
  type: CategoryActionTypes.FETCH_CATEGORIES;
  payload: ICategory[];
}

interface FetchCategoriesErrorAction {
  type: CategoryActionTypes.FETCH_CATEGORIES_ERROR;
  payload: string;
}

export type CategoryAction = FetchCategoriesAction | FetchCategoriesErrorAction;
