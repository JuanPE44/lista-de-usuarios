import { useEffect, useState } from "react";
import Usuario from "../Usuario";

export default function ListadoUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  const cargarDatos = () => {
    fetch("http://localhost/usuarios/")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data)
        setCargando(false)  
      });
  }

  const borrarUsuario = (id) => {
    fetch(`http://localhost/usuarios/?borrar=${id}`) 
      .then((res) => res.json())
      .then((data) => {
        cargarDatos()
      });
  }

  useEffect(() => {
    cargarDatos();
  }, []);

  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-8 text-center">Listado de usuarios</h1>
      {cargando ? <h1>cargando...</h1> : 
      (
        <ul className="grid gap-x-8 gap-y-10 lg:grid-cols-2 justify-center pb-10">
          {usuarios.map((usuario) => {
              return (
                <Usuario
                  key={usuario.id || 'key'}
                  borrarUsuario={borrarUsuario}
                  id={usuario.id}
                  nombre={usuario.nombre}
                  email={usuario.email}
                  urlImg={usuario.urlImg}
                />
              );              
          })}
        </ul>
      )}
    </div>
  );
}
