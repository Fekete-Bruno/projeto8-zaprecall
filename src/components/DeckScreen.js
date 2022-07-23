import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Cards from './Cards'

export default function DeckScreen({questions,setScreen, deckGoal}){

    const [started,setStarted] = React.useState(false)
    const [deck,setDeck] = React.useState([]);
    const [counter,setCounter]=React.useState(0);
    const [footerIcons, setFooterIcons] = React.useState([]);

    function createDeck() {
    questions.sort(() => Math.random() - 0.5);
    questions.forEach((question) => {
        deck.push({ ...question,
        status:"card"});
    });
    }

    if(deck.length===0){
        createDeck()
    }

    return(
        <div className="deck-screen">
            <Header />
            <div className="cards">
                {deck.map((card, index) => (
                <Cards 
                    index={index} key={index} card={card} 
                    started={started} setStarted={setStarted} 
                    deck={deck} setDeck={setDeck} 
                    counter={counter} setCounter={setCounter}
                    footerIcons={footerIcons} setFooterIcons={setFooterIcons}/>
                ))}
            </div>
            <Footer counter={counter} deck={deck} 
            footerIcons={footerIcons}
            setScreen={setScreen} deckGoal={deckGoal}/>  
        </div>
    )
}