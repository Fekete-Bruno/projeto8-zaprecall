import React from 'react'
import Header from './Header'
import Footer from './Footer'
import DeckCards from './DeckCards'

export default function DeckScreen(){
    const decks = [
        {question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"},
        {question:"O React é __", answer:"uma biblioteca JavaScript para construção de interfaces"},
        {question:"Componentes devem começar com ___", answer: "letra maiúscula"},
        {question:"Podemos colocar __ dentro do JSX", answer:"expressões" },
        {question:"O ReactDOM nos ajuda __", answer:"interagindo com a DOM para colocar componentes React na mesma" },
        {question:"Usamos o npm para __", answer:"gerenciar os pacotes necessários e suas dependências" },
        {question:"Usamos props para __", answer:"passar diferentes informações para componentes" },
        {question:"Usamos estado (state) para __", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
    ]

    const deck = [];
    function createDeck() {
    decks.sort(() => Math.random() - 0.5);
    decks.forEach((value,index) => {
        if(index<4){
            deck.push({ ...value,
            status:"card" });
        };
    });
    }

    createDeck();
    console.log(deck)
    return(
        <div className="deck-screen">
            <Header />
            <DeckCards />
            <Footer />  
            
        </div>
    )
}