import axios from "axios";
import {
  GET_USERS,
  GET_USERS_ID,
  CLEAN_USERS,
  CONFIRM_STATE,
  DELETE_USER,
} from "../types/restTypes";

export const getUsers = (type, id) => {
  return async (dispatch) => {
    let users = [];
    let url = null;
    if (type === "get") {
      url = "https://api-generator.retool.com/guD0XI/data";
    }
    if (type === "getId") {
      url = `https://api-generator.retool.com/guD0XI/data/${id}`;
    }
    await axios
      .get(url)
      .then((response) => {
        const responseData = response.data;
        if (type === "get") {
          users = responseData;
          dispatch(getUserData(users));
        }
        if (type === "getId") {
          dispatch(getUserDataById(responseData));
        }
      })
      .catch(() => {
        console.log("Error Data");
      });
  };
};

export const postUser = (user) => {
  return async () => {
    let url = "https://api-generator.retool.com/guD0XI/data";
    try {
      await axios.post(url, user);
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUser = (id) => {
  return async () => {
    let url = `https://api-generator.retool.com/guD0XI/data/${id}`;
    try {
      await axios.delete(url);
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateUser = (id, user) => {
  return async () => {
    let url = `https://api-generator.retool.com/guD0XI/data/${id}`;
    try {
      await axios.put(url, user);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserData = (user) => {
  return (dispatch) => {
    dispatch({
      type: GET_USERS,
      payload: user,
    });
  };
};

export const getUserDataById = (id) => {
  return (dispatch) => {
    dispatch({
      type: GET_USERS_ID,
      payload: id,
    });
  };
};

export const clearUsers = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAN_USERS,
    });
  };
};

export const confirmState = (state) => {
  return (dispatch) => {
    dispatch({
      type: CONFIRM_STATE,
      payload: state,
    });
  };
};
export const deleteUserList = (users, id) => {
  return (dispatch) => {
    let arrayUsers = users.filter((user) => user.id !== id);
    dispatch({
      type: DELETE_USER,
      payload: arrayUsers,
    });
  };
};
