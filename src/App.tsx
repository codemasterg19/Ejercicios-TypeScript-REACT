import { AreaCuadrado } from "./typescript/AreaCuadrado";
import { DivideArreglo } from "./typescript/DivideArreglo";
import { SumaArreglo } from "./typescript/SumaArreglo";


const App = () => {
  return (
    <div className="mt-2">
      <h1>Ejercicios TypeScript - React</h1>
      <hr />
      {/*<AreaCuadrado/>*/}
      {/*<SumaArreglo/>*/}
      <DivideArreglo/>
    </div>
  )
}

//exportando el componente a todo el proyecto
export default App;