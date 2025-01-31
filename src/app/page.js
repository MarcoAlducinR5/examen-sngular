import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="flex w-full justify-center mt-10 sm:mx-auto sm:w-full sm:max-w-sm">Introduzca un numero para calcular su serie</h1>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form>
            <div className="flex w-full justify-center my-4">
              <label className="">Numero</label>
            </div>
            <div className="flex w-full justify-center my-4">
              <input type="number" id="numero" name="numero" placeholder="Numero" className="rounded-md border border-black bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <div className="flex w-full justify-center my-4">
              <button type="button" className=" w-1/2 rounded-md border border-black py-1.5">Generar serie</button>
            </div>
          </form>
        </div>
        <h1 className="flex w-full justify-center mt-10 sm:mx-auto sm:w-full sm:max-w-sm">El término n de la serie es: m</h1>
      </div>
    </React.Fragment>
  );
}
