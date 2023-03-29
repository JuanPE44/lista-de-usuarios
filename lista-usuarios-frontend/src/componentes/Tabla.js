import useGlobalUser from "../hooks/useGlobalUser";
import Fila from "./Fila";

export default function Tabla() {
  const { usuarios } = useGlobalUser();

  return (
    <table className="w-full text-sm text-gray-500 dark:text-gray-400 text-left mt-6 rounded-lg">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
        <tr className="text-lg">
          <th scope="col" className="px-6 py-3"></th>
          <th scope="col" className="px-6 py-3">
            Nombre
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3"></th>
        </tr>
      </thead>
      <tbody>
        {usuarios &&
          usuarios.map((usuario) => {
            return (
              <Fila
                key={usuario.id}
                id={usuario.id}
                nombre={usuario.nombre}
                email={usuario.email}
                urlImg={usuario.urlImg}
              />
            );
          })}
      </tbody>
    </table>
  );
}
