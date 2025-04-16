
export default function Jogo({palavras, setPalavraSorteada, setBotaoLetras, imagemForca, arrayTracinhos, setArrayTracinhos, venceu}){  

  function sortearPalavra(){
   
    let palSort = palavras[Math.floor(Math.random() * palavras.length)];

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
        <button onClick={sortearPalavra} className="botao-iniciar">Escolher Palavra</button>
        <h1 className= {`palavra-sorteada ${venceu}`}>
          {arrayTracinhos}
        </h1>
      </div>
    </div>  
  );
} 