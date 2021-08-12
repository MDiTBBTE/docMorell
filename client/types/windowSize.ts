export interface WindowSizeState {
  width: undefined | number | null;
  height: undefined | number | null;
}

export enum WindowSizeActionTypes {
  CHANGE_WINDOW_SIZE = "CHANGE_WINDOW_SIZE",
}

interface ChangeWindowSizesAction {
  type: WindowSizeActionTypes.CHANGE_WINDOW_SIZE;
  payload: { width: number; height: number };
}

export type WindowSizeAction = ChangeWindowSizesAction;
