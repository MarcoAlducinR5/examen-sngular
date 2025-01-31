"use client"

import React from "react";

export default function Home() {

  const [numeroValue, setNumeroValue] = React.useState("");
  const [resultadoValue, setResultadoValue] = React.useState("");

  const onSendValueChange = (event) => {
    setNumeroValue(event.target.value);
    setResultadoValue("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    detSerie(numeroValue);
  };

  function detEsPrimo(numero) {
    if(numero <= 1) return false;
    for (let index = 2; index < numero; index++) {
        if(numero % index === 0) return false;
    }
    return true;
  }

  function Primos(n) {
    let primos = [];
    if(n<1) return 0;
    for (let i = 2; i <= 200; i++) {
        if(detEsPrimo(i)) primos.push(i);
    }
    return primos[n-1];
  }

  function Triangular(n) {
    if(n<0) return 0;
    return (n * (n + 1)) / 2;
  }

  function Fibonacci(n) {
    if(n<0) return 0;
    let arrFibo = [0,1]
    if (n === 0 || n === 1) return arrFibo[n];
    return Fibonacci(n-1) + Fibonacci(n-2);
  }

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
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="flex w-full justify-center mt-10 sm:mx-auto sm:w-full sm:max-w-sm">Introduzca un numero para calcular su serie</h1>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
        </div>
        <h1 className="flex w-full justify-center mt-10 sm:mx-auto sm:w-full">{resultadoValue}</h1>
      </div>
    </React.Fragment>
  );
}
