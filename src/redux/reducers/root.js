import {combineReducers} from "redux";
import accountStore from "./accountStore";
import dashStore from "./dashStore";

const root = combineReducers({
    account: accountStore,
    dash: dashStore,
})

export default root