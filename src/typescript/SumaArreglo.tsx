import React from 'react'

export const SumaArreglo = () => {

    const miArreglo = [25, 34, 18, 40, 55];
    const resultado = sumarArreglo(miArreglo);



  return (
    <div>
        <h2>Suma de Arreglo</h2>
      <span>La suma del arreglo es: {resultado}</span>
    </div>
  )
}

const sumarArreglo = (arreglo: number[]): number => {
    let suma = 0;
  
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
  
    return suma;
  };
