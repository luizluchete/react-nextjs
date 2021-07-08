import Titulo from '../../components/Titulo'

export default function usandoTitle(){
  return (
    <div>
      <Titulo 
        principal="Pagina de Cadastro"
        secundario="Incluir, alterar e excluir coisas !"
      >
      </Titulo>
      <Titulo 
        principal="Pagina de Consulta"
        secundario="Consultar"
      >
      </Titulo>      

    </div>
  )
}