import { usersAPI } from "../Api/api";

const SET_AUTH_USER = 'SET_AUTH_USER';


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isError: false,
  errorMessage: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        ...action.data
      }
      default:
        return state;
  }
};


export const setAuthUser = (userId, email, login, isAuth, isError, errorMessage) => {
  return {
    type: SET_AUTH_USER,
    data: {
      userId,
      email,
      login,
      isAuth,
      isError, 
      errorMessage,
    }
  };
};

export const authUserThunkCreator = () => {
  return async (dispatch) => {
    let data = await usersAPI.authUser()
        if (data.resultCode === 0) {
          let {
            id,
            email,
            login
          } = data.data;
          dispatch(setAuthUser(id, email, login, true));
        }
  };
};

export const login = (email, password, rememberMe = false) => {
  return async (dispatch) => {
    let response = await usersAPI.loginUser(email, password, rememberMe)
        if (response.data.resultCode === 0) {
          dispatch(authUserThunkCreator());
        } else{
          let message = response.data.messages.length >0 ? response.data.messages[0]: "Some error";
          console.log(message)
          dispatch(setAuthUser(null, null, null, false, true, message));
        }
  };
};

export const logout = () => {
  return async (dispatch) => {
    let data = await usersAPI.logoutUser()
        if (data.resultCode === 0) {
          dispatch(authUserThunkCreator(null, null, null, false));
        }
  };
};


export default authReducer;