import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET-USER-DATA';


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
        isAuth: true,
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

export const getAuthUserData = () => (dispatch) => {
  authAPI.auth()
    .then(data => {
      if (data.resultCode === 0) {
        let {email, id, login} = data.data;
        dispatch(setAuthUserDataAC(id, email, login, true));
      }
    })
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe)
      .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
    })
  }
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout()
      .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false));
      }
    })
  }
};

export default authReducer;
