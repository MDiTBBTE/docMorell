import {
  WindowSizeAction,
  WindowSizeActionTypes,
  WindowSizeState,
} from "../../types/windowSize";

const initialState: WindowSizeState = {
  width: null,
  height: null,
};

export const windowSizeReducer = (
  state = initialState,
  action: WindowSizeAction
): WindowSizeState => {
  switch (action.type) {
    case WindowSizeActionTypes.CHANGE_WINDOW_SIZE:
      return { width: action.payload.width, height: action.payload.height };
    default:
      return state;
  }
};
