import React, { useState } from "react";

function Form(props) {

    //const [name, setName] = useState("Usar hooks(ganchos)!");
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
        //pensar em add verificação para evitar tarefas vazias
        //props.addTask("Pau na maquina!");
        //alert("Pau na maquina!");
    }
    //ouvinte/capturar o valor digitado no input nova tarefa
    function handleChange(e) {
        setName(e.target.value);
        //console.log(e.target.value);
        //console.log("Digitando...");
      }

    return (
        //codigo retorno ..
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    O que precisa ser feito?
                </label>
            </h2>
            <input 
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange} 
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Adicionar
            </button>
        </form>
    );
}

export default Form;