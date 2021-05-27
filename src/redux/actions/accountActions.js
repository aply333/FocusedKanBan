import { actionTypes } from "./actionTypes";
import axios from "axios";

const rootUrl = "http://localhost:5000/";
const backendTargert = "focusedKanban"

const loginAction = (credentials) => (dispatch) => {
    dispatch({ type: actionTypes.POST_LOGIN_START});
    axios
        .post(`${rootUrl}${backendTargert}/account/login`, credentials)
}
