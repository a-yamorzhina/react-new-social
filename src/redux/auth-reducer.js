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
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserDataAC = (userId, email, login) => {
  return {
    type: SET_USER_DATA,
    data: {userId, email, login},
  }
};

export const auth = () => {
  return (dispatch) => {
    authAPI.auth().then(data => {
      // debugger;
      if (data.resultCode === 0) {
        let {email, id, login} = data.data;
        dispatch(setAuthUserDataAC(email, id, login));
      }
    })
  }
};


export default authReducer;
