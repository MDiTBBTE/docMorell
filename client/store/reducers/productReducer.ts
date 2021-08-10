import {
  ProductAction,
  ProductActionTypes,
  ProductState,
} from "../../types/product";

const initialState: ProductState = {
  products: [],
  searchedProducts: null,
  productError: "",
};

export const productReducer = (
  state = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return { ...state, productError: action.payload };
    case ProductActionTypes.FETCH_PRODUCT:
      return { ...state, productError: "", products: action.payload };
    case ProductActionTypes.SEARCH_PRODUCT:
      return { ...state, productError: "", searchedProducts: action.payload };
    case ProductActionTypes.DELETE_SEARCHED_PRODUCT:
      return { ...state, productError: "", searchedProducts: null };
    default:
      return state;
  }
};
