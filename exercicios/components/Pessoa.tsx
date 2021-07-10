interface PessoaPros {
  nome: string;
  idade?: number;
}

export default function Pessoa(props:PessoaPros){
  return (
    <div style={{marginBottom: '20px'}}>
      <div>
        Nome: {props.nome}
      </div>
      <div>
        {props.idade ? props.idade : null}
      </div>
    </div>
  )

}