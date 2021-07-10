import { Component } from "react";
import ContadorComponent from '../../components/Contador'

export default class Contadorpage extends Component{

  render(){
    return (
      <div>
        <ContadorComponent valorInicial={100}></ContadorComponent>
        <ContadorComponent></ContadorComponent>
      </div>
    )
  }

}