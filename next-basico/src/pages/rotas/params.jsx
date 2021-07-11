import {useRouter} from 'next/router';
import Link from 'next/link'
export default function Params(){

  const router = useRouter()
  const {id, nome} = router.query;
  console.log(router);
  return (
    <div>
      <h1>Rotas / Params: {id} - {nome}</h1>
      <Link href="/rotas" passHref>
        <button>Voltar</button>
      </Link>
    </div>
  )
}