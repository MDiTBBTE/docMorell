import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { categoryReducer } from "./categoryReducer";
import { articleReducer } from "./articleReducer";
import { productReducer } from "./productReducer";
import { breadcrumbReducer } from "./breadcrumbReducer";
import { cartReducer } from "./cartReducer";
import { windowSizeReducer } from "./windowSizeReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  article: articleReducer,
  product: productReducer,
  breadcrumb: breadcrumbReducer,
  cart: cartReducer,
  windowSize: windowSizeReducer,
});

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
