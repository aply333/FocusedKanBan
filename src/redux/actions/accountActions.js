import { actionTypes } from "./actionTypes";
import axios from "axios";

const rootUrl = "http://localhost:5000/";
const backendTargert = "focusedKanban"

export const loginAction = (credentials) => (dispatch) => {
    dispatch({ type: actionTypes.POST_LOGIN_START});
    axios
        .post(`${rootUrl}${backendTargert}/account/login`, credentials)
        .then((res) => {
            sessionStorage.setItem("token", res.data.token)
            dispatch({
                type: actionTypes.POST_LOGIN_SUCCESS,
                payload: res.data.user
            })
            
        })
        .catch(err=> {
            dispatch({
                type: actionTypes.POST_LOGIN_FAIL,
                payload: err
            })
        })
}

// http://localhost:5000/focusedKanban/account/login