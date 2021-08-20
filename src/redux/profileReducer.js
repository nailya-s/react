import { profileAPI} from '../../src/Api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
  posts: [{
      message: 'Hi, my friends',
      like: '1'
    },
    {
      message: 'Hello the world',
      like: '2'
    }
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        like: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      };
    case SET_USER_STATUS:
      return {
        ...state, status: action.status
      };
    default:
      return state;
  }
};


export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText
  };
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status
});


export const setUserProfileThunkCreator = (userId) => {
  return async (dispatch) => {
    let data = await profileAPI.setUsers(userId);
    dispatch(setUserProfile(data));
  };
};

export const getUserStatusThunkCreator = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data));
  };
};

export const updateUserStatusThunkCreator = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  };
};

export default profileReducer;