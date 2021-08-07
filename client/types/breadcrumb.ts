export interface BreadcrumbsState {
  breadcrumbs: { text: string; route: string }[];
}

export enum BreadcrumbActionTypes {
  ADD_BREADCRUMB = "ADD_BREADCRUMB",
}

interface AddBreadcrumbAction {
  type: BreadcrumbActionTypes.ADD_BREADCRUMB;
  payload: string[];
}

export type BreadcrumbAction = AddBreadcrumbAction;
