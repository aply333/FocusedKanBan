import { actionTypes } from "../actions/actionTypes";
import { initialBoard } from "./initialStore";

const boardStore = (state = initialBoard, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default boardStore;