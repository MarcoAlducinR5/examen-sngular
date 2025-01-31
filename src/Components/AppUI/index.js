import React from 'react';
import { Formulario } from '../Formulario';
import { Resultado } from '../Resultado';

function AppUI(){
    return (
        <React.Fragment>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <h1 className="flex w-full justify-center mt-10 sm:mx-auto sm:w-full sm:max-w-sm">Introduzca un numero para calcular su serie</h1>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Formulario />
                </div>
                <Resultado />
            </div>
        </React.Fragment>
    );
}

export {AppUI}