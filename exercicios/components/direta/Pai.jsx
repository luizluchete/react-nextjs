import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import Filho from "./Filho";

export default function Pai(props){
  return (
    <div>
      <Filho familia="Luchete" nome={props.familia}></Filho>
      <Filho familia="Luchete #02" nome={props.familia}></Filho>
      <Filho familia="Luchete #03" {...props}></Filho>
    </div>
  )
}