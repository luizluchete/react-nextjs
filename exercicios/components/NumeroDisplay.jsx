export default function ContadorDisplay(props){
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems: 'center',
      height:"50px",
      width:'50px',
      borderRadius: "25px",
      color: "#fff",
      backgroundColor: '#222',
      fontSize: "2rem",
      margin: "20px"
    }}>
    {props.valor}

    </div>
  )
}