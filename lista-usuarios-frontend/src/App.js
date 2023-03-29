import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ListadoUsuarios from './pages/ListaUsuarios';
import CrearUsuario from './pages/CrearUsuario';
import EditarUsuario from './pages/EditarUsuario';
import Nav from './componentes/Nav';
import { UserContextProvider } from './context/UserContext';



function App() {
 
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-white text-white">        
        <BrowserRouter>      
          <Nav />
          <Routes>
            <Route index element={<ListadoUsuarios />}/>
            <Route path={'/crear'} element={<CrearUsuario/>}/>
            <Route path={'/editar/:id'} element={<EditarUsuario/>}/>
          </Routes>
        </BrowserRouter>
      </div>    
    </UserContextProvider>
  )
}

export default App;
