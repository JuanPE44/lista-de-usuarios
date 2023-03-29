

import { Link } from "react-router-dom"
import getBorrarUsuario from "../services/getBorrarUsuario"

export default function Fila ({id, nombre,email,urlImg}) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
        <img className="h-10 w-10 rounded-full object-cover flex-none" src={urlImg} alt="" />
      </td>
      <td className="px-6 py-4 capitalize font-semibold">
        {nombre}
      </td>
      <td className="px-6 py-4 text-indigo-400 ">
        {email}
      </td> 
      <td>
        <div className="flex gap-x-2 flex-none">
          <Link to={`/editar/${id}`} className='inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-blue-500 text-white hover:bg-slate-700'>Editar</Link>
          <button onClick={()=>getBorrarUsuario(id)} className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-red-500 text-white hover:bg-red-300">Borrar</button>
        </div>
      </td>
    </tr>
  )
} 