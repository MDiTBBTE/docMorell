import {
  ProductAction,
  ProductActionTypes,
  ProductState,
} from "../../types/product";

const initialState: ProductState = {
  products: [],
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
      return { productError: "", products: action.payload };
    default:
      return state;
  }
};
