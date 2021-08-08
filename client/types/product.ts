export interface IProduct {
  _id: string;
  name: string;
  description: string;
  type: string;
  isBestseller: string;
  activeSubstance: string;
  doses: string;
  pillImage: string | null;
  packageImage: string | null;
}

export interface ProductState {
  products: IProduct[];
  searchedProducts: null | IProduct[];
  productError: string;
}

export enum ProductActionTypes {
  FETCH_PRODUCT = "FETCH_PRODUCT",
  SEARCH_PRODUCT = "SEARCH_PRODUCT",
  DELETE_SEARCHED_PRODUCT = "DELETE_SEARCHED_PRODUCT",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
}

interface FetchCategoriesAction {
  type: ProductActionTypes.FETCH_PRODUCT;
  payload: IProduct[];
}

interface SearchCategoriesAction {
  type: ProductActionTypes.SEARCH_PRODUCT;
  payload: IProduct[];
}

interface DeleteSearchedProductsAction {
  type: ProductActionTypes.DELETE_SEARCHED_PRODUCT;
  payload: IProduct[];
}

interface FetchCategoriesErrorAction {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

export type ProductAction =
  | FetchCategoriesAction
  | FetchCategoriesErrorAction
  | SearchCategoriesAction
  | DeleteSearchedProductsAction;
