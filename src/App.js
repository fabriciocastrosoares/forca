import { useState } from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import forca0 from "./assets/forca0.png";


export default function App() {
  const [arrayTracinhos, setArrayTracinhos] = useState([]);
  const [palavraSorteada, setPalavraSorteada] = useState([]);
  const [botaoLetras, setBotaoLetras] = useState(true);
  const [letraClicada, setLetraClicada] = useState([]);
  const [letraCerta, setLetraCerta] = useState([]);
  const [letraErrada, setLetraErrada] = useState([]);
  const [imagemForca, setImagemForca] = useState(forca0);
  const [venceu, setVenceu] = useState("")

  return (
    <>
     <Jogo palavras={palavras} palavraSorteada = {palavraSorteada} 
     arrayTracinhos={arrayTracinhos} setArrayTracinhos={setArrayTracinhos}
      setPalavraSorteada = {setPalavraSorteada} setBotaoLetras = {setBotaoLetras} 
      imagemForca = {imagemForca} letraCerta = {letraCerta} venceu = {venceu}/> 


     <Letras botaoLetras = {botaoLetras} palavraSorteada = {palavraSorteada}  setPalavraSorteada = {setPalavraSorteada}
     arrayTracinhos={arrayTracinhos} setArrayTracinhos={setArrayTracinhos}
      letraCerta = {letraCerta} setLetraCerta = {setLetraCerta} 
      letraClicada = {letraClicada} setLetraClicada = {setLetraClicada}
      letraErrada ={letraErrada} setLetraErrada = {setLetraErrada}
      setImagemForca = {setImagemForca} setVenceu = {setVenceu}/>
     
    </>
  );

}




