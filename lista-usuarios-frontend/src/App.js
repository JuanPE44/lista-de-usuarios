import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import ListadoUsuarios from './componentes/ListadoUsuarios';
import CrearUsuario from './componentes/CrearUsuario';
import EditarUsuario from './componentes/EditarUsuario';

function App() {
  return (
    <div className="App min-h-screen bg-white text-white">
      <BrowserRouter>
        <nav className='font-sans bg-slate-900'>
          <ul className='text-lg text-white font-semibold'>
            <li>
              <Link className='' to={'/'}>Listado</Link>      
            </li>
            <li>
              <Link to={'/crear'}>Crear usuario</Link>      
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListadoUsuarios />}/>
          <Route path={'/crear'} element={<CrearUsuario/>}/>
          <Route path={'/editar/:id'} element={<EditarUsuario/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
