import {
  CHANGE_MODE,
  CLEAN_USERS,
  GET_USERS,
  GET_USERS_ID,
  CONFIRM_STATE,
  DELETE_USER,
} from "../types/restTypes";

const initialState = {
  darkMode: false,
  users: [],
  singleUser: [],
  confirmState: false,
};

export const restAPI = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        darkMode: true,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload.reverse(),
      };
    case GET_USERS_ID:
      return {
        ...state,
        singleUser: action.payload,
      };
    case CLEAN_USERS:
      return {
        ...state,
        singleUser: [],
      };
    case CONFIRM_STATE:
      return {
        ...state,
        confirmState: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
