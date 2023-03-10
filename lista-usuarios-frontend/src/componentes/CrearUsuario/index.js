

import { useNavigate  } from 'react-router-dom'
 
export default function CrearUsuario() {
  const datos = { nombre: "", email: "" };
  const navegar = useNavigate();

  const actualizarDatos = (e) => {
    datos[e.target.name] = e.target.value;
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    fetch("http://localhost/usuarios/?insertar=1", {
      method: "POST",
      body: JSON.stringify(datos),
    })
      .then((res) => res.json())
      .then((data) => {
        navegar('/')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col items-center gap-y-4">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-8">
        Crear usuarios
      </h1>
      <div className="w-full max-w-xs">
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
              placeholder="Email"
              onChange={actualizarDatos}
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
