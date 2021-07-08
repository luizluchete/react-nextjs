/*
  <div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span>6</span>
    <span>7</span>
    <span>8</span>
    <span>9</span>
    <span>10</span>
    <span>11</span>
  </div>
*/

export default function lista() {
  

  return (
  <div>
    <div>
      {gerarLista(10)}
    </div>
    <div>
      {gerarLista(3)}
    </div>
  </div>)
}


function gerarLista(quantidade = 10){
const lista = [];
  for(let i =1; i <= quantidade; i++){
    lista.push(<span key={i}>{i},</span>)
  }

  return lista;
}