import { actionTypes } from "../actions/actionTypes";
import { initialBoard } from "./initialStore";

const boardStore = (state = initialBoard, action) => {
  switch (action.type) {
    case actionTypes.GET_COMPLETE_BOARD_START:
      return {
        ...state,
        boardFetch: true,
        boardError: "",
      };
    case actionTypes.GET_COMPLETE_BOARD_SUCCESS:
      return {
        ...state,
        boardFetch: false,
        boardData: action.payload.board,
      };
    case actionTypes.GET_COMPLETE_BOARD_FAIL:
      return {
        ...state,
        boardFetch: false,
        boardError: action.payload,
      };
    case actionTypes.SELECT_CARD:
      return{
        ...state,
        selectedCard: action.payload
      }
    case actionTypes.SELECT_COLUMN:
      return{
        ...state,
        selectedColumn: action.payload
      }
    default:
      return state;
  }
};


export default boardStore;
