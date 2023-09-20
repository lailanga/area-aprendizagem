import Tabuleiro from "@/app/components/Tabuleiro/Tabuleiro";
import { useState } from 'react';

export default function Game(){

    //const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill('')]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    //const currentSquares = history[history.length - 1];
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares:any) {
        //setHistory([...history, nextSquares]);
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        //setXIsNext(!xIsNext);
    }
    
    function jumpTo(nextMove:any) {
        setCurrentMove(nextMove);
        //setXIsNext(nextMove % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
          description = 'Vá se mover #' + move;
        } else {
          description = 'Ir para o início do jogo';
        }
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
    });

    return (
        <div>
            <div>
                <Tabuleiro xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div>
                {moves}
            </div>
        </div>
    );
}