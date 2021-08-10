export interface CartState {
  carts: null | {}[];
}

export enum CartActionTypes {
  CHANGE_CART = "CHANGE_CART",
}

interface ChangeCartAction {
  type: CartActionTypes.CHANGE_CART;
  payload: string[];
}

export type CartAction = ChangeCartAction;
