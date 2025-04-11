

export default function Letras({botaoLetras, palavraSorteada, contemLetra, setContemLetra}){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return(
        <div className="todas-letras">
           {alfabeto.map((letra) => <Letra key ={letra}  letra = {letra} 
           botaoLetras = {botaoLetras} palavraSorteada = {palavraSorteada}
           contemLetra = {contemLetra} setContemLetra = {setContemLetra}/>)}
        </div>
        
    );
    
  }

 function conferirLetras({letra, palavraSorteada, contemLetra, setContemLetra} ){
  

  if(palavraSorteada.includes(letra)){
    setContemLetra(letra);
    console.log("oi");
  }
  
  console.log(letra);
 }
  


  function Letra({letra, botaoLetras, palavraSorteada, contemLetra, setContemLetra}){
    
    return(
        <>
        <button onClick={() => conferirLetras({letra, palavraSorteada, contemLetra, setContemLetra})} disabled = {botaoLetras} className="escolher-letras" >{letra}</button>            
        </>
    );
  }