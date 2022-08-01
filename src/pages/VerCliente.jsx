import { useRestStore } from "../hooks/useRestStore";
import { useNavigate } from "react-router-dom";

const VerCliente = () => {
  const { singleUser, clearUser } = useRestStore();
  const navigate = useNavigate();

  const onClickBack = () => {
    clearUser();
    navigate(`/clientes`);
  };

  return Object.keys(singleUser).length === 0 ? (
    <p> No hay resultados </p>
  ) : (
    <div className="bg-white p-5 rounded-md shadow-md">
      <>
        <h1 className="text-center font-black text-4xl text-blue-900">
          {" "}
          Ver Cliente: {singleUser.nombre}{" "}
        </h1>
        <p className="mt-3 text-center ">Informacion del cliente</p>

        <p className="text-2xl text-gray-600 mt-10">
          <span className=" uppercase font-bold">Cliente:</span>
          {singleUser.nombre}
        </p>

        <p className="text-2xl mt-4 text-gray-600">
          <span className=" uppercase font-bold">Email:</span>
          {singleUser.email}
        </p>

        <p className="text-2xl mt-4 text-gray-600">
          <span className=" uppercase font-bold">Telefono:</span>
          {singleUser.telefono}
        </p>

        {singleUser.empresa && (
          <p className="text-2xl mt-4 text-gray-600">
            <span className=" uppercase font-bold">Empresa:</span>
            {singleUser.empresa}
          </p>
        )}

        {singleUser.notas && (
          <p className="text-2xl mt-4 text-gray-600">
            <span className=" uppercase font-bold">Notas:</span>
            {singleUser.notas}
          </p>
        )}
      </>
      <button
        type="button"
        onClick={onClickBack}
        className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
      >
        Ir atrás
      </button>
    </div>
  );
};

export default VerCliente;
