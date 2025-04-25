import { useState } from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute";
import palavras from "./palavras";
import forca0 from "./assets/forca0.png";

export default function App() {
  const [palSort, setPalSort] = useState("");
  const [arrayTracinhos, setArrayTracinhos] = useState([]);
  const [palavraSorteada, setPalavraSorteada] = useState([]);
  const [botaoLetras, setBotaoLetras] = useState(true);
  const [letraClicada, setLetraClicada] = useState([]);
  const [letraCerta, setLetraCerta] = useState([]);
  const [letraErrada, setLetraErrada] = useState([]);
  const [imagemForca, setImagemForca] = useState(forca0);
  const [resultado, setResultado] = useState("");
  const [chute, setChute] = useState("");
  const [textoInput, setTextoInput] = useState("Já sei a palavra!");

  return (
    <>
     <Jogo palavras={palavras} palavraSorteada = {palavraSorteada} 
      arrayTracinhos={arrayTracinhos} setArrayTracinhos={setArrayTracinhos}
      setPalavraSorteada = {setPalavraSorteada} setBotaoLetras = {setBotaoLetras} 
      imagemForca = {imagemForca} letraCerta = {letraCerta} resultado = {resultado} setLetraClicada = {setLetraClicada}
      setLetraCerta = {setLetraCerta} setLetraErrada = {setLetraErrada} setImagemForca = {setImagemForca} 
      setResultado = {setResultado} setChute={setChute} setPalSort = {setPalSort} setTextoInput = {setTextoInput}/> 


     <Letras botaoLetras = {botaoLetras} palavraSorteada = {palavraSorteada}  setPalavraSorteada = {setPalavraSorteada}
      arrayTracinhos={arrayTracinhos} setArrayTracinhos={setArrayTracinhos}
      letraCerta = {letraCerta} setLetraCerta = {setLetraCerta} 
      letraClicada = {letraClicada} setLetraClicada = {setLetraClicada}
      letraErrada ={letraErrada} setLetraErrada = {setLetraErrada}
      setImagemForca = {setImagemForca} setResultado = {setResultado}
      setBotaoLetras = {setBotaoLetras} chute = {chute} setChute = {setChute} palSort = {palSort}
      textoInput = {textoInput} setTextoInput = {setTextoInput}/>

      <Chute palSort = {palSort} botaoLetras = {botaoLetras} textoInput = {textoInput} setChute = {setChute}
      chute = {chute} setArrayTracinhos = {setArrayTracinhos} setResultado = {setResultado}
      setBotaoLetras = {setBotaoLetras} setImagemForca = {setImagemForca} setTextoInput = {setTextoInput} 
      palavraSorteada = {palavraSorteada}/>
    </>
  );

}




