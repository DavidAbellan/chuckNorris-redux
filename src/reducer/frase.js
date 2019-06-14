////importar nada


let estadoInicial = {
    quotes : [] /////////le pasas el array de action
}

function frases (state = estadoInicial,action){
  switch (action.type){
      case 'ADDFRASE':
          return { ...state,
              quotes: [...state.quotes,{quotes:action.text}]
            } ;  
           ////////// modifica el stado inicial

      

      
      default : 
      return state
  }

}
export default frases