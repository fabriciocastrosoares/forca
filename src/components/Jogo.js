import forca0 from "../assets/forca0.png";

export default function Jogo({palavras, setPalavraSorteada, setBotaoLetras, imagemForca, arrayTracinhos, setArrayTracinhos, resultado, setLetraClicada, setLetraCerta,
  setLetraErrada, setImagemForca, setResultado, setChute, palSort, setPalSort, setTextoInput}){  

    function iniciarJogo(){
      setPalavraSorteada([]);
      setArrayTracinhos([]); 
      setBotaoLetras(true);
      setLetraClicada([]);
      setLetraCerta([]);
      setLetraErrada([]);
      setImagemForca(forca0);
      setResultado("");
      setChute("");
      setTextoInput("Já sei a palavra!");
      sortearPalavra();      
    } 

    function sortearPalavra(){   
      palSort = palavras[Math.floor(Math.random() * palavras.length)];
      setPalSort(palSort);
      
      const palavraSorteada = [...palSort];
      setArrayTracinhos(palavraSorteada.map((_ ) => "_ "));    
      setPalavraSorteada(palavraSorteada);  
      setBotaoLetras(false);
    }
     
    return(
      <div className="estado-jogo">
        <div className="imagem">
            <img src={imagemForca} alt="forca"/>
        </div>      
        <div className="iniciar-jogo">
          <button onClick={iniciarJogo} className="botao-iniciar" >Escolher Palavra</button>
          <h1 className= {`palavra-sorteada ${resultado}`}>
            {arrayTracinhos}
          </h1>
        </div>
      </div>  
    );
} 
