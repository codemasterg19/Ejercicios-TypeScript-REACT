import { useState } from "react"


export const AreaCuadrado = () => {

  const calcularArea = (lado:number) : number =>{
    return  lado*lado;
  }

  return (
    <div>
        <h2>Area Cuadrado</h2>
        <span>El Area del cuadrado es: {(calcularArea(100))}</span>
    </div>
  )
}
