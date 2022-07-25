import "./style.css"
import newLogo from "./logo-new.png"

export default function TitleScreen({decks,setScreen,deckNumber,setDeckNumber,deckGoal,setDeckGoal,cardsAmount,setCardsAmount}){

    function startRecall(){
        if(cardsAmount !==0 && deckGoal!==0 && deckNumber!==0){
        setScreen(false);
        }
    }
    
    return(
        <div className="title">
            <img src={newLogo} alt="new logo"></img>

            <div className="title-text">ZapRecall</div>

            <select required defaultValue="" onChange={(e)=>{setDeckNumber(e.target.value)}}>
            <option value="" disabled>Selecione seu Deck</option>
            {decks.map((deck,index)=>{
                return(<option value={index} key={index}>Flashcards de {deck.deckName}</option>);
            })}
            </select>

            <select required defaultValue="" onChange={(e)=>{setCardsAmount(e.target.value)}}>
            <option value="" disabled >Quantos Cards você quer?</option>
            {decks[deckNumber].questions.map((q,index)=>{
                return(<option value={index+1} key={index}>{(index+1)+" Cards"}</option>);
            })}
            </select>

            <select required defaultValue="" onChange={(e)=>{setDeckGoal(e.target.value)}}>
            <option value="" disabled >Selecione a meta de Zaps</option>
            {decks[deckNumber].questions.map((q,index)=>{
                if(index<cardsAmount){
                    return(<option value={index+1} key={index}>{(index+1)+" Zaps"}</option>);
                }
            })}
            </select>
            
            <div className="button" onClick={startRecall}>Iniciar Recall!</div>
        </div>
    );
}