import store from '../store'
////////// se importa store


export default async function hacerFrase (){
  
  let results = await fetch('https://api.chucknorris.io/jokes/random');
  let data = await results.json() 
 
  /////////////////llamada a la api

  let miAccion ={
    type : 'ADDFRASE',
    text : data.value }

    /////////configurar acción
    
    store.dispatch(miAccion)
  
}

