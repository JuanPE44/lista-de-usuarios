
export default function getBorrarUsuario (id) {
  fetch(`http://localhost/usuarios/?borrar=${id}`) 
    .then((res) => {
      return res.json()
    })
    
}