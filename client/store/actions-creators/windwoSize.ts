import { WindowSizeActionTypes } from "../../types/windowSize";

export const changeWindowSize = (windowSize: {
  width: number;
  height: number;
}) => {
  return {
    type: WindowSizeActionTypes.CHANGE_WINDOW_SIZE,
    payload: windowSize,
  };
};
