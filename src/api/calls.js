const BASE_URL = 'https://swapi.co/api/';

export const getPlanets = i => {
  fetch(`${BASE_URL}${i}`)
    .then( res => res.json() )
    .then( planets => { console.log(planets) } )
    .catch(err => {console.log(err)})
}