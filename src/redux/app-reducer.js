import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';
const GLOBAL_ERROR_OCCURRED = 'GLOBAL-ERROR-OCCURRED';
const HIDE_NOTIFICATION = 'HIDE-NOTIFICATION';



let initialState = {
  initialized: false,
  globalError: ''
};


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    case GLOBAL_ERROR_OCCURRED:
      return {
        ...state,
        globalError: action.error
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        globalError: action.error
      };
    default:
      return state;
  }
};


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const globalErrorOccurred = (error) => ({
  type: GLOBAL_ERROR_OCCURRED,
  error: error
});

export const hideNotification = (error) => ({
  type: HIDE_NOTIFICATION,
  error: error
});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(initializedSuccess());
  })
};

export const globalErrorOccurredThunk = (error) => (dispatch) => {
  dispatch(globalErrorOccurred(error));
  setTimeout(() => {
    dispatch(globalErrorOccurred(null))
  }, 3000)
};

export default appReducer;
