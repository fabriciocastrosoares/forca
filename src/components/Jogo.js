
export default function Jogo({palavras, palavraSorteada, setPalavraSorteada, setBotaoLetras, imagemForca}){  

  function sortearPalavra(){
   
    let palSort = palavras[Math.floor(Math.random() * palavras.length)];

    const palavraSorteada = [...palSort];

    console.log("palavra que foi sorteada:", palavraSorteada);

    
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
        <h1>
          {palavraSorteada.map((_ ) => "_ ")}
        </h1>
      </div>
    </div>  
  );
} 