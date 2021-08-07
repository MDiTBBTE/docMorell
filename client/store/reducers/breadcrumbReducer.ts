import {
  BreadcrumbActionTypes,
  BreadcrumbsState,
  BreadcrumbAction,
} from "../../types/breadcrumb";

const initialState: BreadcrumbsState = {
  breadcrumbs: ["Home"],
};

export const breadcrumbReducer = (
  state = initialState,
  action: BreadcrumbAction
): BreadcrumbsState => {
  switch (action.type) {
    case BreadcrumbActionTypes.ADD_BREADCRUMB:
      return { ...state, breadcrumbs: action.payload };
    default:
      return state;
  }
};
