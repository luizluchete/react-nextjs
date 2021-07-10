import { useEffect, useState } from "react"
import { mega } from '../../functions/mega'
import NumeroDisplay from '../../components/NumeroDisplay'

export default function MegaSena(){
  const [qtde, setQtde] = useState(6);
  const [numeros, setNumero] = useState([]);

  useEffect(()=>{
    setNumero(mega())
  }, [])


  function renderNumeros(){
    return numeros.map(numero => <NumeroDisplay key={numero} valor={numero}/>)
  }
  return (
    <div style={{
      display: "flex",
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1>Mega Sena</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {renderNumeros()}
      </div>
      <div>
        <input type="number" min={6} max={15} value={qtde} onChange={(event)=> setQtde(event.target.value)}/>
        <button onClick={()=>{
          setNumero(mega(qtde))
        }}>Gerar Aposta</button>
      </div>
    </div>
  )
}