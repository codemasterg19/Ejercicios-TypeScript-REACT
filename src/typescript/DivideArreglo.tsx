

export const DivideArreglo = () => {

    const arreglo = [5,10,15,20,25,30,35,40,45,50]
    const resultado = arreglo.map((valor) => valor/5)


  return (
    <div>
        <h2>División de un Arreglo</h2>
        <span>arreglo dividido para 5 es: {resultado.join(', ')}</span>

    </div>
  )



}
