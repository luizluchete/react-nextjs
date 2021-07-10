import Filho from "./Filho";

export default function Pai(props){

  function falarComigo(event, params){
    console.log(params);
    console.log(event);
  }
  return (
    <div>
      <Filho funcao={falarComigo}/>
    </div>
  )
}