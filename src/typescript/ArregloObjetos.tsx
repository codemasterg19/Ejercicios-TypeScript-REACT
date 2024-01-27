
interface Alumno {
    name: string;
    edad: number;
    calificacion: number;
}


export const ArregloObjetos = () => {

    const alumnos = [
        {
            name: 'Viviana',
            edad: 19,
            calificacion: 10,
        },
        {
            name: 'Wendy',
            edad: 20,
            calificacion: 8,
        },
        {
            name: 'Gerson',
            edad: 18,
            calificacion: 9,
        }
    ];
    
    const calculaPromedio = ( alumnos : Alumno[]) =>{

        const sumaCalificaciones =alumnos.reduce((total,alumno) => total + alumno.calificacion, 0)
        return sumaCalificaciones / alumnos.length;
    }

    const promedio = calculaPromedio(alumnos);

  return (
    <div>
        <h2>Arreglo Objetos</h2>
        <span>Promedio de calificaciones: {promedio}</span>
    </div>
  )
}
