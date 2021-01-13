import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA';


let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  //isFetching загрузка идет/не идет
  isAuth: false
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
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

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.auth();
  if (data.resultCode === 0) {
    let {email, id, login} = data.data;
    dispatch(setAuthUserDataAC(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
    dispatch(stopSubmit('login', {_error: message}));
  }
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserDataAC(null, null, null, false));
  }
};

export default authReducer;
