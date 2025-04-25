import forca6 from "../assets/forca6.png";

export default function Chute({chute, palSort, setArrayTracinhos, palavraSorteada, setResultado, setBotaoLetras,
    setChute, setTextoInput, setImagemForca, botaoLetras, textoInput}){

    function chutar(){
        if(chute === palSort){
          setArrayTracinhos(palavraSorteada);
          setResultado("verde");
          setBotaoLetras(true);
          setChute("");
          setTextoInput("Você Venceu!");
        }else{
          setArrayTracinhos(palavraSorteada);
          setResultado("vermelho");
          setBotaoLetras(true);
          setImagemForca(forca6);
          setChute("");
          setTextoInput("Voce perdeu!");
        }
    }

    return(
        <div className="chutar">
            <input 
                disabled = {botaoLetras}
                type = "text" placeholder = {textoInput}
                onChange={(event) => setChute(event.target.value)} 
                value={chute} 
            />
            <button disabled = {botaoLetras} onClick={chutar} className="botao-chutar">Tentar</button>
        </div>
    );
} 