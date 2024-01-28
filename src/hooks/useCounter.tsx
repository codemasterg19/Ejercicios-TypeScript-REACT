import React, { useState } from 'react'

export const useCounter = (numI : number = 0) => {

  const [valor, setValor] =  useState(numI);

const contador = (num : number) => {
    setValor  (valor+num);
}

  return {
    valor,
    contador
    }
}
