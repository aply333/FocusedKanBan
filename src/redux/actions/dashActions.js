import { axiosAuth } from "../../accountRoutes/components/auth/axiosAuth";
import { actionTypes } from "./actionTypes";

const rootUrl = "http://localhost:5000/";
const backendTargert = "focusedKanban";

export const getUserBoards = (userId) => (dispatch) => {
  dispatch({ type: actionTypes.GET_BOARDS_START });
  axiosAuth()
    .get(`${rootUrl}${backendTargert}/boards/userboards/${userId}`)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_BOARDS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.GET_BOARDS_FAIL,
        payload: err,
      });
    });
};

export const selectBoard = (boardId) => (dispatch) => {
  dispatch({ type: actionTypes.SET_SELECTED_BOARD, payload: boardId });
};
