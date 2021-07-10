import React, { useState } from "react"

export default function Formulario(){
  const [valor, setValor] = useState(()=>"inicial")


  function alterarInput(event){
    setValor(valor+ "teste");

  }
  return (
    <div>
      <input type="text" value={valor}
      onChange={e => setValor(e.target.value)}/>
      <button onClick={alterarInput}>Alterar</button>
    </div>
  )
}