import { useSelector, useDispatch } from "react-redux";
import {
  getUsers,
  clearUsers,
  postUser,
  deleteUser,
} from "../redux/actions/restActions";

export const useRestStore = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const singleUser = useSelector((state) => state.singleUser);

  //GET ALL USERS
  const startGettingUsers = () => {
    dispatch(getUsers("get"));
  };
  //GET USER BY ID
  const startGettingUsersId = (id) => {
    dispatch(getUsers("getId", id));
  };
  //CREATE A NEW USER W/ POST
  const createNewUser = (data) => {
    dispatch(postUser(data));
  };
  //DELETE A NEW USER W/ POST
  const deleteUsers = (id) => {
    dispatch(deleteUser(id));
  };
  //CLEAR USER BY ID
  const clearUser = () => {
    dispatch(clearUsers());
  };

  return {
    //Properties
    users,
    singleUser,

    //Methods
    startGettingUsers,
    startGettingUsersId,
    createNewUser,
    deleteUsers,
    clearUser,
  };
};
