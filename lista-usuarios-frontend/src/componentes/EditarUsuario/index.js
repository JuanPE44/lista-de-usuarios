import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function EditarUsuarios () {
  const datos = { nombre: "", email: "" };
  const [usuario, setUsuario] = useState({})
  const [cargando,setCargando] = useState(true)
  
  const actualizarDatos = (e) => {
    datos[e.target.name] = e.target.value;
  };

  const obtenerDatos = (id) => {
    fetch(`http://localhost/usuarios/?consultar=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCargando(false)
        setUsuario({nombre:data[0].nombre,email:data[0].email})
      })
      .catch((err) => console.log(err));
  };

  const enviarDatos = (e) => {
     /*
    e.preventDefault();
   
    fetch("http://localhost/usuarios/?insertar=1", {
      method: "POST",
      body: JSON.stringify(datos),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
      */
  };

  useEffect(()=>{     
    obtenerDatos(13)    
    console.log(usuario)
  }, [usuario])


  return (
    <div className="flex flex-col items-center gap-y-4">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-8">
        Editar usuarios
      </h1>
      <div className="w-full max-w-xs">
        {cargando ? (
          <h1 className="text-gray-900">cargando...</h1>
        ) :
        <form
          onSubmit={enviarDatos}
          className="shadow-xl rounded px-10 pt-10 pb-8 mb-4 bg-white"
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-start"
              htmlFor="nombre"
            >
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="nombre"
              type="text"
              id="nombre"
              value={usuario.nombre}
              placeholder="Nombre"
              onChange={actualizarDatos}
              required
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-start"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="text"
              id="email"
              value={usuario.email}
              placeholder="Email"
              onChange={actualizarDatos}
              required
            />
          </div>
          <button
            className="mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
          <Link
            to='/'
            className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            volver
          </Link>
        </form>
        }
        
      </div>
    </div>
  );
}