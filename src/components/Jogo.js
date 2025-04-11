 
 export default function Jogo({palavras, palavraSorteada, setPalavraSorteada, setBotaoLetras}){  

  function sortearPalavra(){
   
    let palSort = palavras[Math.floor(Math.random() * palavras.length)];

    const palavraSorteada = [...palSort];

    console.log(palavraSorteada);

    
    setPalavraSorteada(palavraSorteada);  
    setBotaoLetras(false);
  }
  
 
  
    return(
        <div className="estado-jogo">
        <div className="imagem">
            <img src="./assets/forca0.png" alt="imagens"/>
        </div>      
        <div className="iniciar-jogo">
          <button onClick={sortearPalavra} className="botao-iniciar">Escolher Palavra</button>
          <h1>
          {palavraSorteada.map((_, index) => (
            <span key={index}>_ </span>
          ))}</h1>
        </div>
      </div>  
    )
 } 