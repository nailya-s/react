import {
  usersAPI,
} from '../../src/Api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';


let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true
            }
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false
            };
          }
          return u;
        })
      };
    case SET_USERS:
      return {
        ...state, users: action.users
      };

    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.currentPage
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state, totalUsersCount: action.totalCount
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state, isFetching: action.isFetching
      };
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] :
          state.followingInProgress.filter(id => id != action.userId)
      };
    default:
      return state;
  }
};
export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId
  };
};

export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  };
};

export const setUsers = (users) => ({
  type: SET_USERS,
  users
});

export const setPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
});

export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

export const toggleFollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

export const requestUsers = (pageNumber, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setPage(pageNumber));
    let response = await usersAPI.getUsers(pageNumber, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalCount(response.totalCount));
  }
};

export const follow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let data = await usersAPI.postUsers(userId)
        if (data.resultCode === 0) {
          dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingInProgress(false, userId));
  }
};

export const unfollow = (userId) => {
    return async (dispatch) => {
     dispatch(toggleFollowingInProgress(true, userId));
     let data = await usersAPI.deleteUsers(userId)
          if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
          }
          dispatch(toggleFollowingInProgress(false, userId));
    };
};

export default usersReducer;