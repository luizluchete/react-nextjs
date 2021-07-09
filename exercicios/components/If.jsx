export default function If(props){
  if(props.teste){
    return props.children
  }
  
  return null
}