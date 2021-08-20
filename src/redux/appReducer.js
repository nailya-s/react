import {authUserThunkCreator} from '../../src/redux/authReducer'
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
       initialized: true
      }
      default:
        return state;
  }
};


export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS
  };
};

export const initializedApp = () => {
  return (dispatch) => {
    let promise = dispatch(authUserThunkCreator());
    Promise.all([promise]).then(()=>{
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;