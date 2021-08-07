import { CartAction, CartActionTypes, CartState } from "../../types/cart";

const initialState: CartState = {
  carts: null,
};

export const cartReducer = (
  state = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.CHANGE_CART:
      return { ...state, carts: action.payload };
    default:
      return state;
  }
};
