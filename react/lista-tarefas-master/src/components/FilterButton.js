import React from "react";

function FilterButton(props) {
    return (
        // codigo de retorno
        <button 
            type="button" 
            className="btn toggle-btn" 
            aria-pressed={props.isPressed} 
            onClick={() => props.setFilter(props.name)} 
        >
          <span className="visually-hidden">Mostrar </span>
          <span>{props.name}</span>
          <span className="visually-hidden"> Tarefas</span>
        </button>
    );
}

export default FilterButton;