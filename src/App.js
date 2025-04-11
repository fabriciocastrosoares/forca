import { useState } from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";


export default function App() {
  const [palavraSorteada, setPalavraSorteada] = useState([]);
  const [botaoLetras, setBotaoLetras] = useState(true);
  const [contemLetra, setContemLetra] = useState(palavraSorteada.map((_ ) => "_ "));

  return (
    <>
     <Jogo palavras={palavras} palavraSorteada = {palavraSorteada} setPalavraSorteada = {setPalavraSorteada} setBotaoLetras = {setBotaoLetras} contemLetra = {contemLetra}/>
     <Letras botaoLetras = {botaoLetras} palavraSorteada = {palavraSorteada} contemLetra = {contemLetra} setContemLetra = {setContemLetra}/>
    </>
  );

}




