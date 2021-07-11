import {useRouter} from 'next/router'
export default function Nome(){
  const router = useRouter();

  const {id, nome} = router.query;
  console.log(id);
  console.log(nome);
  return (
    <div>
      <h1>Rotas / {id} / {nome}</h1>
    </div>
  )
}