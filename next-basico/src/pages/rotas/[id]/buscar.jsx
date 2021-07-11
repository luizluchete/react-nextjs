import {useRouter} from 'next/router'
export default function Buscar(){
  const router = useRouter();

  const {id} = router.query;
  console.log(id);
  return (
    <div>
      <h1>Rotas / {id} / Buscar</h1>
    </div>
  )
}