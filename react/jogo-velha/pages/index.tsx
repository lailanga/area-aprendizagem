//import Botao from "@/app/components/Botao/Botao";
import Image from "@/app/components/Image/Image";
import Lista from "@/app/components/Lista/Lista";
import Game from "@/app/services/game/Game";
//import Game from "@/app/components/Tabuleiro/Tabuleiro";
//import { useState } from 'react';

export default function Home() {

  /*
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  } */

  return (
    <main>
      <div>
        <h1>Laiane</h1>
        <Image />
        <Lista />
      </div>
      <div>
        <h2>Jogo da VEIA*</h2>
        <Game />
      </div>
    </main>
  )
}