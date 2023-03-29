import UserContext from '../context/UserContext'
import { useContext } from 'react'

export default function useGlobalUser() {
  const {usuarios,setUsuarios} =  useContext(UserContext)
  return { usuarios, setUsuarios }
}