import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario";
import { useRestStore } from "../hooks/useRestStore";
const EditarCliente = () => {
  const { singleUser } = useRestStore();

  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900"> Nuevo Editar</h1>
      <p className="mt-3">Utiliza este form para editar parrafos</p>

      {singleUser?.nombre ? (
        <Formulario cliente={singleUser} />
      ) : (
        <p>Cliente ID no válido </p>
      )}
    </div>
  );
};

export default EditarCliente;
