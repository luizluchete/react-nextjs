import listaProdutos from '../../data/listaProdutos';
export default function repeticao2(){
  const comBorda = {
    border: '1px solid',
  };

  function renderizarLinhas(){
    return listaProdutos.map((produto)=>{
      return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
      )
    })
  }


  return (
    <div>
      <table style={comBorda}>
        <thead>
          <tr>
            <th>id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {renderizarLinhas()}
        </tbody>
      </table>
    </div>
  )
}