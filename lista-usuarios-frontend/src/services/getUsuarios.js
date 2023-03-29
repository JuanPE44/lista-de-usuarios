

export default function getUsuarios (API_URL) {
  return fetch(API_URL)
    .then((response) => {
      if(!response.ok) throw {response}
      return response.json();
    })
}