import React from "react";
import TitleScreen from "./TitleScreen/TitleScreen"
import DeckScreen from "./DeckScreen";
import "../css/reset.css"
import "../css/style-mobile.css"


export default function App(){
    const [screen, setScreen] = React.useState(true);
    const [deckNumber, setDeckNumber] = React.useState(0);
    const [deckGoal,setDeckGoal] = React.useState(0);

    const decks = [
        {deckName:"Selecione seu deck",questions:[]},
        {deckName:"Flashcards de HTML",
        questions: [{question:"Qual é o papel/responsabilidade do HTML na construção de um site?", answer:"Ele traz o conteúdo e a semântica dos elementos de um site"},
        {question:"O que são, por exemplo, <body>, <p>, <strong>?", answer:"Tags"},
        {question:"O que são, por exemplo, class='', href='', src=''?", answer: "Atributos"},
        {question:"Qual a versão do HTML que usamos hoje (2022) no mercado?", answer:"HTML 5" },
        {question:"O que é CSS Reset?", answer:"Uma técnica onde resetamos os estilos padrões que o browser adiciona nos elementos" },
        {question:"Qual o nome da parte da URL que geralmente vem após 'www'? ", answer:"Domínio" },
        {question:"Qual a principal função dos domínios nas URLs?", answer:"Não ter que decorar os endereços IP dos servidores" },],
        },
        {deckName:"Flashcards de JavaScript",
        questions: [{question:"O que é árvore DOM?", answer:"É a árvore de elementos do HTML representada como objetos no JavaScript"},
        {question:"Qual a melhor maneira de alterar estilos CSS através do JavaScript?", answer:"Adicionando ou removendo classes conforme a necessidade"},
        {question:"Qual o retorno da expressão 'banana' * 3", answer:"Retorna NaN"},
        {question:"O que é um evento no JavaScript?", answer:"Ações ou ocorrências que acontecem nos elementos acarretadas pelo usuário"},
        {question:"O que são Promises no JavaScript?", answer:"Uma variavel que guarda uma promessa que depois de um tempo se tornará um valor ou um erro"},
        {question:"Por que devemos usar promises/assincronismo?", answer:"Para não travar a execução do código quando temos códigos que demoram para se resolver"},
        {question:"Qual diferença de requisições GET e POST?", answer:"GET para pegar informações e POST para enviar informações"},
        {question:"O que são Status Codes?", answer:"Códigos para dar mais informações sobre uma requisição"},
        {question:"O que são Higher-Order Functions (HOFs)?", answer:"São funções que recebem outras funções como parâmetro"},],
        },
        {deckName:"Flashcards de React",
        questions: [{question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"},
        {question:"O React é ___", answer:"uma biblioteca JavaScript para construção de interfaces"},
        {question:"Componentes devem começar com ___", answer: "letra maiúscula"},
        {question:"Podemos colocar ___ dentro do JSX", answer:"expressões" },
        {question:"O ReactDOM nos ajuda ___", answer:"interagindo com a DOM para colocar componentes React na mesma" },
        {question:"Usamos o npm para ___", answer:"gerenciar os pacotes necessários e suas dependências" },
        {question:"Usamos props para ___", answer:"passar diferentes informações para componentes" },
        {question:"Usamos estado (state) para ___", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }],
        },
    ];

    return(
        <div className="content">
            {(screen) ? (<TitleScreen 
                            decks={decks} setScreen={setScreen} 
                            deckNumber={deckNumber} setDeckNumber={setDeckNumber}
                            deckGoal={deckGoal} setDeckGoal={setDeckGoal}/>) 
            : (<DeckScreen questions={decks[deckNumber].questions} setScreen={setScreen} deckGoal={deckGoal}/>)}
        </div>     
    );
}