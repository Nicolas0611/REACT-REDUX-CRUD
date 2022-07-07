import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Alerta from "./Alerta";
import { useRestStore } from "../hooks/useRestStore";

const Formulario = ({ cliente }) => {
  const navigate = useNavigate();
  const { createNewUser } = useRestStore();
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "El Nombre es muy corto")
      .max(20, "El Nombre es muy largo")
      .required("El Nombre del Cliente es Obligatoria"),

    empresa: Yup.string().required("El nombre de la empresa el Obligatorio"),

    email: Yup.string()
      .email("Email no valido")
      .required("El email es obligatorio"),

    telefono: Yup.number()
      .positive("Numero no valido")
      .integer("Numero no valido")
      .typeError("El numero no es valido"),
  });

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Agregar Cliente
      </h1>

      <Formik
        initialValues={{
          nombre: "Nicolas",
          empresa: "Nico",
          email: "nico.sierra@hotmail.com",
          telefono: "5455546",
          notas: "soy el mejor",
        }}
        onSubmit={(values) => {
          createNewUser(values);
        }}
        enableReinitialize={true}
        validationSchema={nuevoClienteSchema}
      >
        {() => {
          return (
            <Form className="mt-10">
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="nombre">
                  {" "}
                  Nombre:{" "}
                </label>
                <Field
                  id="nombre"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Nombre del Cliente"
                  type="text"
                  name="nombre"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="empresa">
                  {" "}
                  Empresa:{" "}
                </label>
                <Field
                  id="empresa"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Nombre de la empresa"
                  type="text"
                  name="empresa"
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  {" "}
                  E-mail:{" "}
                </label>
                <Field
                  id="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Email del cliente"
                  type="email"
                  name="email"
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="telefono">
                  {" "}
                  Telefono:{" "}
                </label>
                <Field
                  id="telefono"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Telefono"
                  type="tel"
                  name="telefono"
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="notas">
                  {" "}
                  Notas:{" "}
                </label>
                <Field
                  id="notas"
                  className="mt-2 block w-full p-3 bg-gray-50 h-40"
                  placeholder="Notas del ciente"
                  type="text"
                  as="textarea"
                  name="notas"
                />
              </div>

              <input
                type="submit"
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Formulario;
