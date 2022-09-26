import { useState } from "react";

const Contador = () => {
    //Zona de la lógica
    //let prueba = 10;
    //Crear un State
    const [numeroPrueba, setNumeroPrueba] = useState(10)

    const sumar = ()=>{
        //console.log('desde funcion sumar')
        //numeroPrueba++ Nunca modificar el state creado de forma directa
        setNumeroPrueba( numeroPrueba + 1) //Así se modifica un state
    }
    const restar = ()=>{
        //console.log('Desde la resta')
        setNumeroPrueba(numeroPrueba - 1)
    }
    const reset = ()=>{
        //console.log('desde reset')
        setNumeroPrueba(numeroPrueba - numeroPrueba + 10)
    }


    return (
        <div>
            {/* aqui va el maquetado con un poco de logica */}
            <h2>Contador</h2>
            <h3>{numeroPrueba}</h3>
            <button onClick={sumar}>+1</button>
            <button onClick={restar}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Contador;