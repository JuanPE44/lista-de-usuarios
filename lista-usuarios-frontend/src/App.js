import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import ListadoUsuarios from './pages/ListaUsuarios';
import CrearUsuario from './pages/CrearUsuario';
import EditarUsuario from './pages/EditarUsuario';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode'
import StaticContext from './context/staticContext';

function App() {
  const google = window.google;
  const [user,setUser] = useState(null)
  console.log(user)

  const iniciarSesion = (respuesta) => {
    console.log('respuesta: '+ respuesta.credential)
    const userObject = jwt_decode(respuesta.credential)
    setUser(userObject)
  }

  const cerrarSesion = () => {
    setUser(null)

    google.accounts.id.renderButton(
      document.getElementById('google-button'),
      { theme: 'outline', size: 'large'}
    )
  }

  useEffect(()=> {

    /* google global */

    google.accounts.id.initialize({
      client_id: '234225550479-aj4ka3ba9h1duhmr0nilmm3q74jrqmd2.apps.googleusercontent.com',
      callback: iniciarSesion
    })

    google.accounts.id.renderButton(
      document.getElementById('google-button'),
      { theme: 'outline', size: 'large'}
    )
    
  }, [google])

  return (
    <StaticContext.Provider value={''}>
      <div className="min-h-screen bg-white text-white">
        <BrowserRouter>
          <nav className='font-sans bg-slate-900 text-center py-8 flex justify-center p-4'>
            {
              user &&
              <ul className='text-lg text-white font-semibold flex gap-3 justify-center'>
                <li>
                  <Link className='hover:text-blue-300' to={'/'}>Listado</Link>      
                </li>
                <li>
                  <Link className='hover:text-blue-300' to={'/crear'}>Crear usuario</Link>      
                </li>            
              </ul>
            }
            <div className='right-4 flex items-center gap-2'>           
              {
              user && 
              <div className='flex gap-2 items-center flex-none absolute right-3'> 
                <img className='w-7 h-7 rounded-full' src={user.picture} alt={user.name}/>
                <p>{user.name}</p>
                {
                  user && <button onClick={(e)=> cerrarSesion(e)} className='inline-flex justify-center rounded-lg text-sm py-2 px-3 bg-red-600 text-white hover:bg-red-300'>cerrar sesion</button>
                }
              </div>
              }
              <div>
              {
                !user ? <div id='google-button'></div> : ''              
              }
              </div>
            </div>
          </nav>        
          <Routes>
            <Route index element={user && <ListadoUsuarios />}/>
            <Route path={'/crear'} element={user && <CrearUsuario/>}/>
            <Route path={'/editar/:id'} element={user && <EditarUsuario/>}/>
          </Routes>
        </BrowserRouter>
      </div>    
    </StaticContext.Provider>
  )
}

export default App;
