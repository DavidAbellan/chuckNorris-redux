import  { connect } from 'react-redux'; //// cuando sea un objeto se importa de react redux
import React from 'react'
import Btn from './loadFrase' ////// otro componente boton


function afrase(props){
   
    ///map de mapstateprops --- texto
  
   
  return (
      <div>
          <h1>Chuck Quotes!!</h1>  
            
           {props.quotes.map(q=><h2>{q.quotes}</h2>)}
        
             <Btn/>

      </div>
  )

}

function mapStateProps (state){
      
    return {
        quotes : state.fraseReduce.quotes /// variabledelinitalstate : viene del reducer combine 
    }
    
}

const conexion = connect(mapStateProps);

export default conexion(afrase)/// se exporta a sí mismo