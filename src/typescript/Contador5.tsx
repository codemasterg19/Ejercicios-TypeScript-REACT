import { useCounter } from "../hooks/useCounter"


export const Contador5 = () => {

  const {valor, contador} = useCounter(100); 

  return (
    <div> 
        <h4>Hook use State: <small>{valor}</small></h4>
        <button className="btn btn-primary" onClick={()=> {contador(5)}}>+5</button>
        &nbsp;
        <button className="btn btn-primary" onClick={()=> {contador(-5)}}>-5</button>


    </div>
  )
}
