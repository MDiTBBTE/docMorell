import { CartActionTypes } from "../../types/cart";

export const changeCart = (items: {}[]) => {
  return {
    type: CartActionTypes.CHANGE_CART,
    payload: items,
  };
};
