import { actionTypes } from "./types";
import GetCreativeService from "../services/getCreativeService";
import GetLogService from "../services/getLogService";
import moment from 'moment'


const { getCreative } = new GetCreativeService();
const { getLog } = new GetLogService();

export const requestCreativeAC = () => ({ type: actionTypes.REQUEST_CREATIVE });

export const requestedCreativeAC = data => ({
  type: actionTypes.REQUESTED_CREATIVE,
  payload: data
});

export const loggedInAC = values => ({ type: actionTypes.LOGGEDIN, payload: values });

export const logOutAC = url => ({ type: actionTypes.LOGOUT });

export const requestedCreativeErrorAC = message => ({
  type: actionTypes.REQUESTED_CREATIVE_ERROR,
  payload: message
});

export const setCreariveThunk = appid => async dispatch => {
  let now = moment().format('L h:mma');
  dispatch(requestCreativeAC());
  const creative = await getCreative(appid);
  if (!creative.err) {
    console.log("creative", creative);
    dispatch(sendLogThunk(`Got creative #${creative.creativeid}`)); //запись логов в кибану
    dispatch(requestedCreativeAC(creative)); // запись полученных данных в стор
  } else {
    dispatch(sendLogThunk(`[${now}] - ${creative.err}; `));
    console.log("creative.err", creative.err);
    const message = "Ошибка ответа от сервера... Не закрывайте это окно.";
    dispatch(requestedCreativeErrorAC(message));
  }
};

export const sendLogThunk = data => async dispatch => {
  const dataLog = `${data} ${(localStorage.getItem('dataErr') || '')}`;
  const res = await getLog(dataLog);
  console.log('dataLog - ', dataLog);
  if (res.err) {
    localStorage.setItem('dataErr', dataLog);
  } else {
    localStorage.removeItem('dataErr');
  }
};
