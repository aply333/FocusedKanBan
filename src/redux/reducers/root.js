import {combineReducers} from "redux";
import accountStore from "./accountStore";
import boardStore from "./boardStore";
import dashStore from "./dashStore";

const root = combineReducers({
    account: accountStore,
    dash: dashStore,
    board: boardStore
})

export default root