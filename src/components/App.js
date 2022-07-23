import React from "react";
import TitleScreen from "./TitleScreen/TitleScreen"
import DeckScreen from "./DeckScreen/DeckScreen";
import "../css/reset.css"
import "../css/style.css"
import decks from "../assets/decks"


export default function App(){
    const [screen, setScreen] = React.useState(true);
    const [deckNumber, setDeckNumber] = React.useState(0);
    const [deckGoal,setDeckGoal] = React.useState(0);

    return(
        <div className="content">
            {(screen) ? 
            (<TitleScreen 
                decks={decks} setScreen={setScreen} 
                deckNumber={deckNumber} setDeckNumber={setDeckNumber}
                deckGoal={deckGoal} setDeckGoal={setDeckGoal}/>) 
            : (<DeckScreen questions={decks[deckNumber].questions} setScreen={setScreen} deckGoal={deckGoal}/>)}
        </div>     
    );
}