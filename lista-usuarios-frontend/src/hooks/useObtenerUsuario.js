import { useEffect, useState } from "react";
import getUsuarios from "../services/getUsuarios";
import useGlobalUser from "./useGlobalUser";

export default function useUsuarios() {
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const {setUsuarios} = useGlobalUser();

  useEffect(() => {
    getUsuarios('http://localhost/usuarios/')
    .then(res => setUsuarios(res))
    .catch(err => setError(err))
    .finally(()=> setCargando(false))
  }, [])
 
  return {cargando , error}
} 
