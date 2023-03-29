import { Link } from "react-router-dom";
import getBorrarUsuario from "../services/getBorrarUsuario";

export default function Usuario({ id, nombre, email, urlImg }) {
  return (
    <li className="max-w-xl text-center">
      <div className="flex items-center gap-x-6 rounded-md p-6 min-w-max">
        <img className="h-20 w-20 rounded-full object-cover flex-none" src={urlImg} alt="" />
        <div className="flex-1">
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 capitalize">{nombre}</h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">{email}</p>          
        </div>
        <div className="flex gap-x-2 flex-none">
          <Link to={`/editar/${id}`} className='inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-blue-500 text-white hover:bg-slate-700'>Editar</Link>
          <button onClick={()=>getBorrarUsuario(id)} className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-red-500 text-white hover:bg-red-300">Borrar</button>
        </div>
      </div>
    </li>
  );
}
