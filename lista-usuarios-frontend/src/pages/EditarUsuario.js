import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Spinner from "../componentes/Spinner";

export default function EditarUsuarios() {
  const [usuario, setUsuario] = useState({});
  const [cargando, setCargando] = useState(true);
  const navegar = useNavigate();
  const id = useParams().id;

  const actualizarDatos = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const obtenerDatos = (id) => {
    fetch(`http://localhost/usuarios/?consultar=${id}`)
      .then((res) => res.json())
      .then((datos) => {
        setUsuario({
          nombre: datos[0].nombre,
          email: datos[0].email,
          urlImg: datos[0].urlImg,
        });
        setCargando(false);
      })
      .catch((err) => console.log(err));
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    fetch(`http://localhost/usuarios/?actualizar=${id}`, {
      method: "POST",
      body: JSON.stringify(usuario),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navegar("/");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    obtenerDatos(id);
  }, [id]);

  return (
    <div className="flex flex-col items-center gap-y-4">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-8">
        Editar usuarios
      </h1>
      <div className="w-full max-w-xs">
        {cargando ? (
          <Spinner />
        ) : (
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
            <div className="mb-6">
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
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 text-start"
                htmlFor="urlImg"
              >
                UrlImg
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="urlImg"
                type="text"
                id="urlImg"
                value={usuario.urlImg}
                placeholder="UrlImg"
                onChange={actualizarDatos}
                required
              />
            </div>
            <button
              className="mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              actualizar
            </button>
            <Link
              to="/"
              className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              volver
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}
