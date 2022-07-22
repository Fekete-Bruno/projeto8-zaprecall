import "./style.css"
import newLogo from "./logo-new.png"

export default function TitleScreen({decks,setScreen,deckNumber,setDeckNumber}){
    function startRecall(){
        if(deckNumber!==""){
        setScreen(false);
        }
    }
    return(
        <div className="title">
            <img src={newLogo} alt="new logo"></img>
            <select required defaultValue={deckNumber} onChange={(e)=>{setDeckNumber(e.target.value)}}>
            <option value="" disabled >Selecione o seu deck</option>
            {decks.map((deck,index)=>{
                return(<option value={index} key={index}>{deck.deckName}</option>);
            })}
            </select>
            <div className="title-text">ZapRecall</div>
            <div className="button" onClick={startRecall}>Iniciar Recall!</div>
        </div>
    );
}