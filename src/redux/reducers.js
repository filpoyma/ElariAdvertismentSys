import { actionTypes } from "./types";
import { initialState } from "./store";

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_CREATIVE:
      return { ...state, loading: true, loaded: false };
    case actionTypes.REQUESTED_CREATIVE:
      return {
        ...state,
        loading: false,
        loaded: true,
        creative: action.payload,
        message: action.payload.result
      };
    case actionTypes.REQUESTED_CREATIVE_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
        message: action.payload
      };
    case actionTypes.LOGGEDIN:
      return {
        ...state,
        appid: action.payload.appid,
        exitid: action.payload.exitid,
        sleepid: action.payload.sleepid,
        isSubscribe: true
      };
    case actionTypes.LOGOUT:
      return { ...state, isSubscribe: false };
    default:
      return state;
  }
};
