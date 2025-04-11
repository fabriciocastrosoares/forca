export default function Letras({botaoLetras, setBotaoLetras}){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return(
        <div className="todas-letras">
           {alfabeto.map((letra) => <Letra key ={letra} letra = {letra} botaoLetras = {botaoLetras}/>)}
        </div>
        
    );
    
  }


  function Letra({letra, botaoLetras}){
    
    return(
        <>
        <button disabled = {botaoLetras} className="escolher-letras" >{letra}</button>            
        </>
    );
  }