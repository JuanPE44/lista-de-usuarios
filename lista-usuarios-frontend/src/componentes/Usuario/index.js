import { Link } from "react-router-dom";

export default function Usuario({ id, nombre, email, borrarUsuario }) {
  return (
    <li>
      <div className="flex items-center gap-x-6 border-2 rounded-md p-6 min-w-max">
        <img className="h-16 w-16 rounded-full object-cover flex-none" src="https://blog.hubspot.es/hubfs/media/desarrolladorfullstack.jpeg" alt="" />
        <div className="flex-1">
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 ">{nombre}</h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">{email}</p>          
        </div>
        <div className="flex gap-x-2 flex-none">
          <Link to={`/editar/${id}`} className='inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-blue-500 text-white hover:bg-slate-700'>Editar</Link>
          <button onClick={()=>borrarUsuario(id)} className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-red-500 text-white hover:bg-red-300">Borrar</button>
        </div>
      </div>
    </li>
  );
}
