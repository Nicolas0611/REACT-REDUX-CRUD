import React from "react";
import { useNavigate } from "react-router-dom";
import { useRestStore } from "../hooks/useRestStore";

const Cliente = ({ id, nombre, email, telefono, empresa }) => {
  const navigate = useNavigate();
  const { startGettingUsersId, deleteUsers } = useRestStore();

  const onClickView = async (id) => {
    await startGettingUsersId(id);
    navigate(`/clientes/${id}`);
  };

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3"> {nombre}</td>
      <td className="p-3">
        <p>
          {" "}
          <span className="text-gray-800 uppercase font-bold">
            Email:{" "}
          </span>{" "}
          {email}
        </p>
        <p>
          {" "}
          <span className="text-gray-800 uppercase font-bold">Tel: </span>{" "}
          {telefono}{" "}
        </p>
      </td>
      <td className="p-3"> {empresa} </td>
      <td className="p-3">
        <button
          type="button"
          className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs"
          onClick={() => {
            onClickView(id);
          }}
        >
          Ver
        </button>

        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
          onClick={() => {
            startGettingUsersId(id);
            navigate(`/clientes/editar/${id}`);
          }}
        >
          Editar
        </button>

        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
          onClick={() => {
            deleteUsers(id);
          }}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
