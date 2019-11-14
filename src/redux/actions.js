import { actionTypes } from "./types";
import GetCreativeService from "../services/getCreativeService";

const { getCreative } = new GetCreativeService();

export const requestCreativeAC = () => ({ type: actionTypes.REQUEST_CREATIVE });

export const requestedCreativeAC = data => ({
  type: actionTypes.REQUESTED_CREATIVE,
  payload: data
});

export const loggedInAC = id => ({ type: actionTypes.LOGGEDIN, payload: id });

export const logOutAC = url => ({ type: actionTypes.LOGOUT });

export const requestedCreativeErrorAC = message => ({
  type: actionTypes.REQUESTED_CREATIVE_ERROR,
  payload: message
});

export const setCreariveThunk = id => async dispatch => {
  dispatch(requestCreativeAC());
  const creative = await getCreative(id);
  if (!creative.err) {
    console.log("creative", creative);
    //localStorage.setItem('url', creative.htmlformat);
    dispatch(requestedCreativeAC(creative));
  } else {
    console.log("creative.err", creative.err);
    const message = "Ожидание ответа от сервера... Не закрывайте это окно.";
    dispatch(requestedCreativeErrorAC(message));
  }
};
