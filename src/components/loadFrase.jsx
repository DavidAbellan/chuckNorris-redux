import Frase from '../actions/frase'; //// llamamos al action
import React from 'react'

function loadFrase(){
      return(
          <div>
              
             <button onClick={Frase}>CHUCK!</button>

          </div>
      )

}
export default loadFrase;