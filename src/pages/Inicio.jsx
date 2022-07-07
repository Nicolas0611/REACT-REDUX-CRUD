import React, { useEffect, useState } from "react";
import Cliente from "../components/Cliente";
import { useRestStore } from "../hooks/useRestStore";

const Inicio = () => {
  const { users, startGettingUsers } = useRestStore();

  useEffect(() => {
    startGettingUsers();
  }, []);

  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900"> Clientes </h1>
      <p className="mt-3">Administra tus clientes</p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <Cliente key={user.id} {...user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inicio;
