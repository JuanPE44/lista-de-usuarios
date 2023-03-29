
import { Link } from "react-router-dom"


export default function Nav () {


  return (
    <nav className='font-sans bg-slate-900 text-center py-8 flex justify-center p-4'>
      <ul className='text-lg text-white font-semibold flex gap-3 justify-center'>
        <li>
          <Link className='hover:text-blue-300' to={'/'}>Listado</Link>      
        </li>
        <li>
          <Link className='hover:text-blue-300' to={'/crear'}>Crear usuario</Link>      
        </li>            
      </ul> 
    </nav>  
  )
}