import { Dispatch } from "react";
import { ProductAction, ProductActionTypes } from "../../types/product";
import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      const response = await axios.get("http://localhost:5000/product");
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCT,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Произошла ошибка при загрузке треков",
      });
    }
  };
};
