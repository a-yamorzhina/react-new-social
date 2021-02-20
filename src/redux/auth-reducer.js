import {authAPI, securityAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET-CAPTCHA-URL-SUCCESS';


let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  //isFetching загрузка идет/не идет
  isAuth: false,
  captchaUrl: null
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};


export const setAuthUserDataAC = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth},
  }
};

export const getCaptchaUrlSuccess = (captchaUrl) => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl},
  }
};

export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.auth();
    if (data.resultCode === 0) {
      let {email, id, login} = data.data;
      dispatch(setAuthUserDataAC(id, email, login, true));
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
    dispatch(stopSubmit('login', {_error: message}));
  }
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserDataAC(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
