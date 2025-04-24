import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

export default function Letras({botaoLetras, setBotaoLetras, palavraSorteada, 
  letraCerta, setLetraCerta, letraClicada, setLetraClicada, 
  letraErrada, setLetraErrada, setImagemForca, arrayTracinhos, 
  setArrayTracinhos, setResultado,setTextoInput}){
    
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  let palavraAtualizada = arrayTracinhos;
 
  function venceuJogo(){
    if(!palavraAtualizada.includes("_ ")){
      setArrayTracinhos(palavraSorteada);
      setResultado("verde");
      setBotaoLetras(true);
      setTextoInput("Você venceu!");
    }   
  }

  function perdeuJogo(erros){
    if(erros === 6){
      setArrayTracinhos(palavraSorteada);
      setResultado("vermelho");
      setBotaoLetras(true);
      setTextoInput("Voce perdeu!");
    }
  }

  function conferirLetras({letra} ){
    const novaLetraClicada = [...letraClicada, letra];
    setLetraClicada(novaLetraClicada);

    if(palavraSorteada.includes(letra)){
      const novaLetraCerta = [...letraCerta, letra];
      setLetraCerta(novaLetraCerta);      
        
      palavraSorteada.forEach((l, i) => {
          if(l === letra){
            palavraAtualizada[i] = letra;
          }
        });
          setArrayTracinhos(palavraAtualizada);
    
       venceuJogo();
    } 
    
    else{
      const novaLetraErrada = [...letraErrada, letra];
      setLetraErrada(novaLetraErrada);
      setImagemForca(forca1);

      const imagensForca = [forca1, forca2, forca3, forca4, forca5, forca6];

      const erros = novaLetraErrada.length;

      if(erros > 0 && erros <= imagensForca.length){
        setImagemForca(imagensForca[erros - 1]);
      }
      perdeuJogo(erros, imagensForca);
    }
  } 
  
  return(
    <div className="letras-chute">
      <div className="todas-letras">
        {alfabeto.map((letra) => (
          <button
            key={letra}
            className="escolher-letras"
            disabled = {botaoLetras || letraClicada.includes(letra)}
            onClick={() => conferirLetras({letra})}>
            {letra}
          </button>
        ))}
      </div>
    </div>     
  );   
}


