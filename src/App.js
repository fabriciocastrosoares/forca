import { useState } from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import forca0 from "./assets/forca0.png";


export default function App() {
  const [palavraSorteada, setPalavraSorteada] = useState([]);
  const [botaoLetras, setBotaoLetras] = useState(true);
  const [letraClicada, setLetraClicada] = useState([]);
  const [letraCerta, setLetraCerta] = useState([]);
  const [letraErrada, setLetraErrada] = useState([]);
  const [imagemForca, setImagemForca] = useState(forca0);

  return (
    <>
     <Jogo palavras={palavras} palavraSorteada = {palavraSorteada} 
      setPalavraSorteada = {setPalavraSorteada} setBotaoLetras = {setBotaoLetras} 
      imagemForca = {imagemForca}/>
     <Letras botaoLetras = {botaoLetras} palavraSorteada = {palavraSorteada} 
      letraCerta = {letraCerta} setLetraCerta = {setLetraCerta} 
      letraClicada = {letraClicada} setLetraClicada = {setLetraClicada}
      letraErrada ={letraErrada} setLetraErrada = {setLetraErrada}
      setImagemForca = {setImagemForca}/>
     
    </>
  );

}




