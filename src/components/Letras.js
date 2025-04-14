import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";


export default function Letras({botaoLetras, palavraSorteada, letraCerta, setLetraCerta, letraClicada, setLetraClicada, letraErrada, setLetraErrada, setImagemForca}){
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  function conferirLetras({letra} ){

    const novaLetraClicada = [...letraClicada, letra];
    setLetraClicada(novaLetraClicada);

    console.log("letras clicada:", novaLetraClicada);

   
    if(palavraSorteada.includes(letra)){
      const novaLetraCerta = [...letraCerta, letra];
      setLetraCerta(novaLetraCerta);

      console.log("acertou a letra:", novaLetraCerta);
    } else{
      const novaLetraErrada = [...letraErrada, letra];
      setLetraErrada(novaLetraErrada);
      setImagemForca(forca1);

      const imagensForca = [forca1, forca2, forca3, forca4, forca5, forca6];

      const erros = novaLetraErrada.length;

      if(erros > 0 && erros <= imagensForca.length){
        setImagemForca(imagensForca[erros - 1]);
      }
      if(erros === 6){
        setTimeout(() => {
          alert("Você Perdeu, Escolha Uma Nova Palavra Para Tentar Novamente!");
        }, 100)
      }

      //   if(novaLetraClicada.length === 2){
      //     setImagemForca(forca2);
      //   }else if(novaLetraErrada.length === 3){
      //     setImagemForca(forca3);
      //   }else if(novaLetraErrada.length === 4){
      //     setImagemForca(forca4);
      //   }else if(novaLetraErrada.length === 5){
      //     setImagemForca(forca5)
      //   }else if(novaLetraErrada.length === 6){
      //     setImagemForca(forca6);
      //     alert("Você Perdeu, Escolha Uma Nova Palavra Para Tentar Novamente! ");
      // }
      console.log("letras erradas:", novaLetraErrada);
    }
  } 

  return(
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
      
  );
    
}
