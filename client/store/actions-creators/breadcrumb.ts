import {
  BreadcrumbAction,
  BreadcrumbActionTypes,
} from "../../types/breadcrumb";

export const addBreadcrumb = (breadcrumbs) => {
  return {
    type: BreadcrumbActionTypes.ADD_BREADCRUMB,
    payload: breadcrumbs,
  };
};
