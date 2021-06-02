import { actionTypes } from "../actions/actionTypes";
import { initialDash } from "./initialStore";

const dashStore = (state = initialDash, action) => {
  switch (action.type) {
    case actionTypes.GET_BOARDS_START:
      return {
        ...state,
        dashFetch: true,
        dashError: "",
      };
    case actionTypes.GET_BOARDS_SUCCESS:
      return {
        ...state,
        dashFetch: false,
        availableBoards: action.payload.boards,
      };
    case actionTypes.GET_BOARDS_FAIL:
      return {
        ...state,
        dashFetch: false,
        dashError: action.payload,
      };
    case actionTypes.SET_SELECTED_BOARD:
      return {
        ...state,
        selectedBoard: action.payload,
      };
    default:
      return state;
  }
};

export default dashStore;
