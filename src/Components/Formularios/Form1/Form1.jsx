import React from 'react'

const Form1 = () => {
  
    function saludo (){
        alert("Hola samu")
    }
  
    return (
    <>
    
    <div>Form1
        <input aria-label='Ingresa el nombre de la niña'></input>
        <button onClick={() => saludo()}>Saluda</button>
    </div>
    </>
  )
}

export default Form1