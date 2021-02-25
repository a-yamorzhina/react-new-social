import {getAuthUserData} from "./auth-reducer";
import {resolveAny} from "dns";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';
const GLOBAL_ERROR_OCCURRED = 'GLOBAL-ERROR-OCCURRED';


export type InitialStateType = {
  initialized: boolean,
  globalError: string
}

let initialState: InitialStateType = {
  initialized: false,
  globalError: ''
};

//возвращает InitialStateType после скобок синтаксис, чтобы не было ничего левого
const appReducer = (state = initialState, action:any):InitialStateType => {
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
    default:
      return state;
  }
};

export type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS; //'INITIALIZED-SUCCESS'
}


export const initializedSuccess = ():InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const globalErrorOccurred = (error:string) => ({
  type: GLOBAL_ERROR_OCCURRED,
  error: error
});

export const initializeApp = () => (dispatch:any) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(initializedSuccess());
  })
};

export const globalErrorOccurredThunk = (error:any | null) => (dispatch:any) => {
  dispatch(globalErrorOccurred(error));
  setTimeout(() => {
    dispatch(globalErrorOccurred(null))
  }, 3000)
};

export default appReducer;
