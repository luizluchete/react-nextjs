export default function Estilo(props) {
  
  return (
    <div>
      <h1 
        style={
          {
            backgroundColor: props.numero >= 0 ? 'green' : 'red', color:'white',
            color: 'black',
          }
        }>
        Numero: {props.numero}
      </h1>
    </div>

  )

}