import { usersAPI } from "../Api/api";

const SET_AUTH_USER = 'SET_AUTH_USER';


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        ...action.data,
          isAuth: true
      }
      default:
        return state;
  }
};


export const setAuthUser = (id, email, login, isAuth) => {
  return {
    type: SET_AUTH_USER,
    data: {
      id,
      email,
      login,
      isAuth
    }
  };
};

export const authUserThunkCreator = () => {
  return (dispatch) => {
    usersAPI.authUser()
      .then(data => {
        if (data.resultCode === 0) {
          let {
            id,
            email,
            login
          } = data.data;
          dispatch(setAuthUser(id, email, login, true));
        }
      });
  };
};

export const login = (email, password, rememberMe = false) => {
  return (dispatch) => {
    usersAPI.loginUser(email, password, rememberMe)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(authUserThunkCreator());
        }
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    usersAPI.logoutUser()
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(authUserThunkCreator(null, null, null, false));
        }
      });
  };
};


export default authReducer;