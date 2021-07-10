import Pessoa from "../../components/Pessoa";

export default function exemplo(){
  return (
    <div>
      <h1>TypeScript</h1>
      <Pessoa nome="Luiz Vieira" idade={26}></Pessoa>
      <Pessoa nome="Giovana" ></Pessoa>
    </div>
  )
}