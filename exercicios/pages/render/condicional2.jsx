import If from "../../components/If";

export default function condicional2(){
  const numero = 3
  return (
    <div> 
      <If teste={numero % 2 === 0}>
        <h1>O Numero é par</h1>
      </If>
      <If teste={numero % 2 !== 0}>
        <h1>O Numero é Impar</h1>
      </If>
    </div>
    )

}