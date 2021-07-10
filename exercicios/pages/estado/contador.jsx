import {useState} from 'react'
import NumeroDisplay from '../../components/NumeroDisplay';
export default function Contador(){

  const [valor, setValor] = useState(0);

  function somaSubtrai(soma){
    if(soma)
      setValor(valor+1)
    else
      setValor(valor-1)
  }

  return (

    <div>
      <h1>Contator</h1>
      <NumeroDisplay valor={valor}></NumeroDisplay>
      <button onClick={()=>somaSubtrai(true)}>SOMAR</button>
      <button onClick={()=>somaSubtrai(false)}>SUBTRAIR</button>
    </div>

  )
}