import Link from 'next/link'
import router, {useRouter} from 'next/router'

export default function Rotas(){

function navegacaoSimples(url){
  router.push(url)
}  

function navegacaoComParams(){
  router.push({
    pathname:'/rotas/params',
    query: {
      id: 123,
      nome: 'Luiz'
    }
  })
}

  return (
    <div>
      <h1>Rotas Index</h1>
      <ul>
        <Link href="/rotas/params?id=10&nome=LuizLindo" passHref>
        <li>Rota #01</li>
        </Link>
        <Link href="/rotas/123/buscar" passHref>
        <li>Rota #02</li>
        </Link>
        <Link href="/rotas/321/Luiz" passHref>
        <li>Rota #03</li>
        </Link>
      </ul>

      <div style={{
        display:'flex',
        flexDirection: 'column',
      }}>

        <button onClick={()=> router.push("/rotas/123/buscar")}>Buscar</button>
        <button onClick={()=> navegacaoComParams()}>Luiz</button>
      </div>
    </div>
  )
}