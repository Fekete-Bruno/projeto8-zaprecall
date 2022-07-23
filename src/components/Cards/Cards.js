import React from "react";

export default function Cards({index,card,started,setStarted,deck,setDeck,counter,setCounter,footerIcons,setFooterIcons}){

    function startQuestion(){
        if(!started){
            deckManager("question")
            setStarted(true);
        }
    }

    function resultAnswer(result){
        deckManager(result);
        setStarted(false);
        footerIcons.push(result);
        setFooterIcons([...footerIcons])
        setCounter(counter+1)
    }

    function deckManager(text){
        let newDeck = [...deck];
        newDeck[index].status=text;
        setDeck([...newDeck]);
    }
    
    switch(card.status){
        case("card"):
        return(
            <div className="card" onClick={()=>{startQuestion()}}>
                <h2>Pergunta {index+1}</h2>
                <div className="icon"><ion-icon name="play-outline"></ion-icon></div>
            </div>
        );
        case("question"):
        return(
            <div className="question" onClick={()=>deckManager("answer")}>
                <p>{card.question}</p>
                <div><ion-icon name="reload-outline"></ion-icon></div>
            </div>      

        )
        
        case("answer"):
            return(
            <div className="answer">
                <p>{card.answer}</p>
                <div className="button-container">
                <div className="button-red" onClick={()=>resultAnswer("card red")}>
                    <p>Não lembrei</p>
                </div>
                <div className="button-yellow" onClick={()=>resultAnswer("card yellow")}>
                    <p>Quase não lembrei</p>
                </div>
                <div className="button-green" onClick={()=>resultAnswer("card green")}>
                    <p>Zap!</p>
                </div>
                </div>
            </div>
            );

        case("card red"):
            return(
                <div className="card red">
                <h2>Pergunta {index+1}</h2>
                <div><ion-icon name="close-circle"></ion-icon></div>    
                </div>
            );

        case("card yellow"):
            return(
                <div className="card yellow">
                <h2>Pergunta {index+1}</h2>
                <div><ion-icon name="help-circle"></ion-icon></div>    
                </div>
            );
        case("card green"):
            return(
                <div className="card green">
                <h2>Pergunta {index+1}</h2>
                <div><ion-icon name="checkmark-circle"></ion-icon></div>    
                </div>
            );
        default:
            return(<div>DEU ERRO AQUI...</div>);
    }
}