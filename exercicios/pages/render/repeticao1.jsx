export default function repeticao1(){
  const listaAprovados = [
    'João',
    'Maria',
    'Pedro',
    'Luiz',
    'Ronaldo',
    'Cleber',
    'Giovana',
    'Augusto',
  ];

  function renderizarLista(){
    return listaAprovados.map((nome, index) => <li key={index}>{nome}</li>)
  }


  return (
    <div>
    <ul>
      {renderizarLista()}
    </ul>
    </div>
  )
}




// function renderizarLista(){
//   const itens = [];

//   for (let index = 0; index < listaAprovados.length; index++) {
//     itens.push(<li key={index}>{listaAprovados[index]}</li>);
//   }
//   return (
//     <>
//       {itens}
//     </>
//   )
// }