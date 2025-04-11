import forca from "../assets/forca0.png";

export default function Jogo({palavras, palavraSorteada, setPalavraSorteada, setBotaoLetras, contemLetra}){  

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
            <img src={forca} alt="forca"/>
        </div>      
        <div className="iniciar-jogo">
          <button onClick={sortearPalavra} className="botao-iniciar">Escolher Palavra</button>
          <h1>
            {palavraSorteada.map((_ ) => "_ ")}
          </h1>
        </div>
      </div>  
    )
 } 