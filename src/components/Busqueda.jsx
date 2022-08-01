import React from "react";
import SearchField from "react-search-field";
import { useState } from "react";
import { searchUsers } from "../redux/actions/restActions";
import { useDispatch } from "react-redux";
const Busqueda = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const onEnter = (data) => {
    setData(data);
    dispatch(searchUsers(data));
  };
  return (
    <SearchField
      placeholder="Search..."
      onEnter={(value) => onEnter(value)}
      searchText={data}
    />
  );
};

export default Busqueda;
