import { actionTypes } from "../actions/actionTypes";
import { initialAccount } from "./initialStore";

const accountStore = (state = initialAccount, action) => {
  switch (action.type) {
    case actionTypes.POST_LOGIN_START:
      return {
        ...state,
        accountFetch: true,
        accountError: "",
      };
    case actionTypes.POST_LOGIN_SUCCESS: {
      return {
        ...state,
        accountFetch: false,
        accountData: action.payload,
      };
    }
    case actionTypes.POST_LOGIN_FAIL: {
      return {
        ...state,
        accountFetch: false,
        accountError: action.payload,
      };
    }
    default:
      return state;
  }
};

export default accountStore;
