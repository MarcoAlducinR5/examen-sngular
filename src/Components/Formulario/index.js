import React from 'react';
import { TodoContext } from '@/Context';
import { Primos } from '@/Utils/Primos';
import { Triangular } from '@/Utils/Triangular';
import { Fibonacci } from '@/Utils/Fibonacci';

function Formulario(){
    const {numeroValue, setNumeroValue, setResultadoValue} = React.useContext(TodoContext);

    const onSendValueChange = (event) => {
        setNumeroValue(event.target.value);
        setResultadoValue("");
    };

    const onSubmit = (event) => {
        event.preventDefault();
        detSerie(numeroValue);
    };

    function detSerie(n) {
        try{
            let dato = parseInt(n);
        
            let result =  ((4 * Primos(dato)) - Triangular(dato-1))/ Fibonacci(dato+2);
            //let result =  (4 * (Primos(dato) - Triangular(dato-1))) / Fibonacci(dato+2);
        
            if(result <= 0) throw new Error("El valor de n debe ser un número positivo.");
            if (Fibonacci(dato+2) === 0) throw new Error("División por cero no permitida.");
            setResultadoValue(`El término ${n} de la serie es: ${result}`);
        }
        catch(e){
            setResultadoValue(e.message);
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <div className="flex w-full justify-center my-4">
                    <label className="">Numero</label>
                </div>
                <div className="flex w-full justify-center my-4">
                    <input type="number" id="numero" name="numero" placeholder="Numero" className="rounded-md border border-black bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" value={numeroValue} onChange={onSendValueChange} />
                </div>
                <div className="flex w-full justify-center my-4">
                    <button type="submit" className=" w-1/2 rounded-md border border-black py-1.5">Generar serie</button>
                </div>
            </form>
        </React.Fragment>
    );
}

export {Formulario};