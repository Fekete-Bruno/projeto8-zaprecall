import React from 'react'
import Header from './Header'
import Footer from './Footer'

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


    return(
        <div className="deck-screen">
            <Header />
            <div className="answer">
                <div className="answer-text">
                    <h2>dizer para o React quais informações quando atualizadas devem renderizar a tela novamente</h2>
                </div>
                <div className="button-container">
                    <div className="button-red"><p>Não Lembrei</p></div>
                    <div className="button-yellow"><p>Quase não lembrei</p></div>
                    <div className="button-green"><p>Zap!</p></div>
                </div>

            </div>
            <div className="card red">
                <h2>Pergunta 2</h2>
                <ion-icon name="close-circle"></ion-icon>
            </div>
            <div className="card yellow">
                <h2>Pergunta 3</h2>
                <ion-icon name="help-circle"></ion-icon>
            </div>
            <div className="card green">
                <h2>Pergunta 4</h2>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>

            <Footer />  
            
        </div>
    )
}