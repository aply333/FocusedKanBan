import { axiosAuth } from "../../accountRoutes/components/auth/axiosAuth";
import { actionTypes } from "./actionTypes";

const rootUrl = "http://localhost:5000/";
const backendTargert = "focusedKanban";

export const getCompleteBoard = (board_id) => (dispatch) => {
  dispatch({ type: actionTypes.GET_COMPLETE_BOARD_START });
  axiosAuth()
    .get(`${rootUrl}${backendTargert}/boards/completeBoard/${board_id}`)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_COMPLETE_BOARD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.GET_COMPLETE_BOARD_FAIL,
        payload: err,
      });
    });
};


export const selectCard = (card_id) => (dispatch) => {
  dispatch({
    type: actionTypes.SELECT_CARD,
    payload: card_id
  })
}

export const selectColumn = (column_id) => (dispatch) => {
  dispatch({
    type: actionTypes.SELECT_COLUMN,
    payload: column_id
  })
} 