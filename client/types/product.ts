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
  productError: string;
}

export enum ProductActionTypes {
  FETCH_PRODUCT = "FETCH_PRODUCT",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
}

interface FetchCategoriesAction {
  type: ProductActionTypes.FETCH_PRODUCT;
  payload: IProduct[];
}

interface FetchCategoriesErrorAction {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

export type ProductAction = FetchCategoriesAction | FetchCategoriesErrorAction;
