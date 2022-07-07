import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Formulario from "../components/Formulario"

const EditarCliente = () => {
    const {id} = useParams();
  
    const [cliente, setCliente]=useState({})
    const [cargando, setCargando]=useState(false)
  
    useEffect(() => {
      setCargando(!cargando);
      const obtenerClienteAPI = async ()=>{
        try {
         
          const url=`http://localhost:4000/clientes/${id}`
          const respuesta = await fetch(url)
          const resultado = await respuesta.json();
          setCliente(resultado);
  
        } catch (error) {
  
          console.log(error)
        
        }
        setCargando(false)
      }
      obtenerClienteAPI()
    },[])
    
    return (
        <div>
            <h1 className='font-black text-4xl text-blue-900'> Nuevo Editar</h1>
            <p className="mt-3">Utiliza este form para editar parrafos</p>
            
                    {cliente?.nombre ? (
                        <Formulario
                        cliente={cliente}

                        />
                    ): <p>Cliente ID no válido </p>}
        </div>
    )
}

export default EditarCliente
