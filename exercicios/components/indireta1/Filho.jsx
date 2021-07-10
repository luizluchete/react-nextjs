export default function Filho(props){

  // "Luiz Fernando Luchete Vieira"
  
  return (
    
    <div>
      <h1>Filho</h1>
      <button onClick={(event)=> props.funcao(event,'teste')}>Falar com o componente PAI</button>
    </div>
  )
}