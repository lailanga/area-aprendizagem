import { useState } from 'react';

interface BotaoProps {
    count?: any;
    onClick?: any;
    children?: string;
    value?: any;
    onSquareClick?: any;
}

export default function Botao({count, value, onSquareClick, onClick, children}:BotaoProps) {

    /*
    //variavael de state/estado
    const [count, setCount] = useState(0);
    //estado atual ( count) / função que permite atualizá-lo ( setCount)

    function handleClick() {
        setCount(count + 1);
       // alert('Você me clicou '+count+' vezes!');
        //console.log(count);
    }
    const [value, setValue] = useState('');
    function jogarClick() {
        setValue('X');
    }
    */

    return (
       
        <button 
            onClick={onSquareClick}
            style={{
                width: '40px',
                height: '40px',
                margin:'0'
            }}
        >
            {value}
        </button>
        //<button>
           // {children}
        //</button>
         
    );
}