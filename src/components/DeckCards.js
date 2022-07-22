import React from "react";
import Card from "./Card"
export default function DeckCards({decks}){ 
    const [started,setStarted] = React.useState(false)
    const [deck,setDeck] = React.useState([]);
    console.log(setDeck)
    function createDeck() {
    decks.sort(() => Math.random() - 0.5);
    decks.forEach((card) => {
        deck.push({ ...card,
        status:"card"});
    });
    }

    if(deck.length===0){
        createDeck()
    }

    console.log(deck)

    return(
        <div className="cards">

        {deck.map((card, index) => (
          <Card index={index} key={index} card={card} started={started} setStarted={setStarted} deck={deck} setDeck={setDeck}/>
        ))}

        </div>
    );
}