import React from "react";
import { TodoContext } from "@/Context";

function Resultado(){
    const {resultadoValue} = React.useContext(TodoContext);
    
    return (
        <h1 className="flex w-full justify-center mt-10 sm:mx-auto sm:w-full">{resultadoValue}</h1>
    );
}

export {Resultado}