import React from "react";
import Card from "./Card"
export default function DeckCards({deck, setDeck}){ 
    const [started,setStarted] = React.useState(false)

    return(
        <div className="cards">

        {deck.map((card, index) => (
          <Card index={index} key={index} card={card} started={started} setStarted={setStarted} deck={deck} setDeck={setDeck}/>
        ))}

        </div>
    );
}