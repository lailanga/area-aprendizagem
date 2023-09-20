import Botao from "../Botao/Botao";
//import { useState } from 'react';

interface TabuleiroProps {
    xIsNext?: boolean;
    squares?: unknown | any;
    onPlay?: any;
}

export default function Tabuleiro({xIsNext, squares, onPlay, ...props}:TabuleiroProps) {

    //const [xIsNext, setXIsNext] = useState(true);
    //const [squares, setSquares] = useState(Array(9).fill(''));

    function handleClick(i: number) {
        if( squares[i] || calculateWinner(squares) ){
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[i] = 'X';
        }else{
            nextSquares[i] = 'O';
        }
        //setSquares(nextSquares);
        //setXIsNext(!xIsNext);
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Ganhador: " + winner;
    } else {
        status = "Próximo jogador: " + (xIsNext ? "X" : "O");
    }

    function calculateWinner(squares:any) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
    }
    

    return (
        <>
            <div>{status}</div>
            <div>
                <Botao value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Botao value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Botao value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div>
                <Botao value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Botao value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Botao value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div>
                <Botao value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Botao value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Botao value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
        
    );
}


