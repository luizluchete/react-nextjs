import { useState } from "react";

export default function Mouse(props){


  const [x, alterarX] = useState(0);
  const [y, alterarY] = useState(0);
  // const arrayX = useState(0);
  // let x = arrayX[0];
  // const alterarX = arrayX[1];

  // const arrayY = useState(0);
  // let y = arrayY[0];
  // const alterarY = arrayY[1];
  



  const style = {
    display: "flex",
    flexDirection: 'Column',
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#222',
    color: "#fff",
    height: '100vh'
    
  }

  function quandoMover(event){
    alterarX(event.clientX);
    alterarY(event.clientY);
    
  }
  
  return (
    <div style={style} onMouseMove={quandoMover}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  )
}