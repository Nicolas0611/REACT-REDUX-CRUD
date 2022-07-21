import { useSelector, useDispatch } from "react-redux";
import {
  getUsers,
  clearUsers,
  postUser,
  deleteUser,
  confirmState,
  deleteUserList,
  updateUser,
} from "../redux/actions/restActions";

export const useRestStore = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const confirmation = useSelector((state) => state.confirmState);
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
    dispatch(confirmState(true));
  };

  //DELETE A NEW USER W/ POST
  const deleteUsers = (id) => {
    dispatch(deleteUserList(users, id));
    dispatch(deleteUser(id));
  };

  //DELETE A NEW USER W/ POST
  const updateUsers = (id, user) => {
    dispatch(updateUser(id, user));
    dispatch(confirmState(true));
  };

  //CLEAR USER BY ID
  const clearUser = () => {
    dispatch(clearUsers());
  };
  //CLEAR USER BY ID
  const confirmationGetter = (id) => {
    dispatch(confirmState(id));
  };

  return {
    //Properties
    users,
    singleUser,
    confirmation,

    //Methods
    startGettingUsers,
    startGettingUsersId,
    createNewUser,
    deleteUsers,
    updateUsers,
    clearUser,
    confirmationGetter,
  };
};
