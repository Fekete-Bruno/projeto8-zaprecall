import "./style.css"
import newLogo from "./logo-new.png"

export default function TitleScreen({decks,setScreen,deckNumber,setDeckNumber,deckGoal,setDeckGoal}){

    function startRecall(){
        if(deckGoal!==0){
        setScreen(false);
        }
    }
    
    return(
        <div className="title">
            <img src={newLogo} alt="new logo"></img>

            <div className="title-text">ZapRecall</div>

            <select required defaultValue={deckNumber} onChange={(e)=>{setDeckNumber(e.target.value)}}>
            {decks.map((deck,index)=>{
                return(<option value={index} key={index}>{deck.deckName}</option>);
            })}
            </select>

            <select required defaultValue="" onChange={(e)=>{setDeckGoal(e.target.value)}}>
            <option value="" disabled >Selecione a meta de Zaps</option>
            {decks[deckNumber].questions.map((question,index)=>{
                return(<option value={index+1} key={index}>{(index+1)+" Zaps"}</option>);
            })}
            </select>
            
            <div className="button" onClick={startRecall}>Iniciar Recall!</div>
        </div>
    );
}