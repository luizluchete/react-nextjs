export default function jsx4(){

  const name = 'Luiz Vieira';
  return (
    <div>
      <h1>{name}</h1>
      <h3>{3 * 3}</h3>
      <h4>{Math.max(13,39)}</h4>
      <h5>{entre(30,30,40)}</h5>
    </div>)
}


function entre(valor,min, max){
  if(valor >= min && valor <= max){
    return 'SIM'
  } 

  return 'NÃO'
}