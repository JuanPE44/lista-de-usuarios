import Spinner from "../componentes/Spinner";
import Tabla from "../componentes/Tabla";
import useObtenerUsuarios from "../hooks/useObtenerUsuario";

export default function ListadoUsuarios() {
  const { cargando, error } = useObtenerUsuarios()

  if(error) return <h1 className="text-center text-black pt-5 text-2xl">no se encontro la base de datos</h1>

  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-8 text-center">Listado de usuarios</h1>
      {
        cargando 
        ? <Spinner /> 
        :
        <section className="relative overflow-x-auto">
          <Tabla />
        </section>
      }
      
    </div>
  );
}
