export interface BreadcrumbsState {
  breadcrumbs: { text: string; route: string }[] | null;
}

export enum BreadcrumbActionTypes {
  ADD_BREADCRUMB = "ADD_BREADCRUMB",
}

interface AddBreadcrumbAction {
  type: BreadcrumbActionTypes.ADD_BREADCRUMB;
  payload: { text: string; route: string }[];
}

export type BreadcrumbAction = AddBreadcrumbAction;
