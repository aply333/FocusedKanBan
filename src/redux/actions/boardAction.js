import { axiosAuth } from "../../accountRoutes/components/auth/axiosAuth"
import { actionTypes } from "./actionTypes"

const rootUrl = "http://localhost:5000/";
const backendTargert = "focusedKanban";

export const getCompleteBoard = (board_id) => (dispatch) => {
    dispatch({type : actionTypes.GET_COMPLETE_BOARD_START})
    axiosAuth()
        .get(`${rootUrl}${backendTargert}/boards/completeBoard/${board_id}`)
        .then((res) => {
            dispatch({
                type: actionTypes.GET_COMPLETE_BOARD_SUCCESS,
                payload: res.data,
            })
        .catch((err)=> {
            dispatch({
                type: actionTypes.GET_COMPLETE_BOARD_FAIL,
                payload: err
            })
        })
        })
}