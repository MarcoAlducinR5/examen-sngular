import React from 'react';

const TodoContext = React.createContext();

function TodoProvider(props){

    const [numeroValue, setNumeroValue] = React.useState("");
    const [resultadoValue, setResultadoValue] = React.useState("");

    return (
        <TodoContext.Provider value={{
            numeroValue, setNumeroValue,
            resultadoValue, setResultadoValue
        }}>
            {props.children}
        </TodoContext.Provider>
    );

}

export {TodoContext, TodoProvider};