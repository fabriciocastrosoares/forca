import { useState } from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";


export default function App() {
  const [palavraSorteada, setPalavraSorteada] = useState([]);
  const [botaoLetras, setBotaoLetras] = useState(true);

  return (
    <>
     <Jogo palavras={palavras} palavraSorteada = {palavraSorteada} setPalavraSorteada = {setPalavraSorteada} setBotaoLetras = {setBotaoLetras}/>
     <Letras botaoLetras = {botaoLetras} />
    </>
  );

}




