export default function Lista(props){
  return (
    <div>
      <h1>Lista de algo</h1>
      <ul style={{padding: 0}}>
        {props.children}
      </ul>
    </div>
    
  )
}