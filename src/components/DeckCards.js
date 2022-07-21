import React from "react";
import Card from "./Card"
export default function DeckCards({decks}){ 

    const [deck,setDeck] = React.useState([]);
    function createDeck() {
    decks.sort(() => Math.random() - 0.5);
    decks.forEach((card) => {
        deck.push({ ...card,
        status:"card"});
    });
    }

    createDeck();

    return(
        <div className="cards">
        {/* {deck.map((card, index) => (
          <Card index={index+1} key={index} card={card} />
        ))} */} 
        <div className="card" >
            <h2>Pergunta N</h2>
            <div><ion-icon name="play-outline"></ion-icon></div>
        </div>
        <div className="question">
            <h2 className="question-text">Usamos estado (state) para ___</h2>
            <div className="question-icon"><ion-icon name="reload-outline"></ion-icon></div>
        </div>
        <div className="answer">
            <h2 className="answer-text">dizer para o React quais informações quando atualizadas devem renderizar a tela novamente</h2>
            <div className="button-container">
                <div className="button-red">
                    <p>Não lembrei</p>
                </div>
                <div className="button-yellow">
                    <p>Quase não lembrei</p>
                </div>
                <div className="button-green">
                    <p>Zap!</p>
                </div>
            </div>
        </div>
        <div className="card red">
            <h2>Pergunta N</h2>
            <div><ion-icon name="close-circle"></ion-icon></div>    
        </div>
        <div className="card yellow">
            <h2>Pergunta N</h2>
            <div><ion-icon name="help-circle"></ion-icon></div>    
        </div>
        <div className="card green">
            <h2>Pergunta N</h2>
            <div><ion-icon name="checkmark-circle"></ion-icon></div>    
        </div>
        
        </div>
    );
}