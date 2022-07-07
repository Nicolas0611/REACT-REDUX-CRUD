import {
  CHANGE_MODE,
  CLEAN_USERS,
  GET_USERS,
  GET_USERS_ID,
} from "../types/restTypes";

const initialState = {
  darkMode: false,
  users: [],
  singleUser: [],
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

    default:
      return state;
  }
};
