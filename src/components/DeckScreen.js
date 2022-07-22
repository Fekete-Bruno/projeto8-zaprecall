import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import DeckCards from './DeckCards'
import react from 'react'

export default function DeckScreen(){
    const decks = [
        {question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"},
        {question:"O React é ___", answer:"uma biblioteca JavaScript para construção de interfaces"},
        {question:"Componentes devem começar com ___", answer: "letra maiúscula"},
        {question:"Podemos colocar ___ dentro do JSX", answer:"expressões" },
        {question:"O ReactDOM nos ajuda ___", answer:"interagindo com a DOM para colocar componentes React na mesma" },
        {question:"Usamos o npm para ___", answer:"gerenciar os pacotes necessários e suas dependências" },
        {question:"Usamos props para ___", answer:"passar diferentes informações para componentes" },
        {question:"Usamos estado (state) para ___", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
    ]

    const [counter,setCounter]=React.useState(0)

    return(
        <div className="deck-screen">
            <Header />
            <DeckCards decks={decks} />
            <Footer counter={counter}/>  
        </div>
    )
}