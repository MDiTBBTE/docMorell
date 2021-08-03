export interface ICategory {
  _id: string;
  title: string;
  types: string;
}

interface IChangedCategory {
  category: string;
  isSelectedCat: boolean;
  types: { name: string; isSelected: boolean }[];
}

export interface CategoryState {
  categories: ICategory[];
  changedCategories: IChangedCategory[];
  filters: { category: string; type: string };
  error: string;
}

export enum CategoryActionTypes {
  FETCH_CATEGORIES = "FETCH_CATEGORIES",
  FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR",
  CHANGE_CATEGORIES = "CHANGE_CATEGORIES",
  ADD_CATEGORIES = "ADD_CATEGORIES",
}

interface FetchCategoriesAction {
  type: CategoryActionTypes.FETCH_CATEGORIES;
  payload: ICategory[];
}

interface ChangeCategoriesAction {
  type: CategoryActionTypes.CHANGE_CATEGORIES;
  payload: IChangedCategory[];
}

interface FetchCategoriesErrorAction {
  type: CategoryActionTypes.FETCH_CATEGORIES_ERROR;
  payload: string;
}

interface AddFilters {
  type: CategoryActionTypes.ADD_CATEGORIES;
  payload: { category: string; type: string };
}

export type CategoryAction =
  | FetchCategoriesAction
  | FetchCategoriesErrorAction
  | ChangeCategoriesAction
  | AddFilters;
