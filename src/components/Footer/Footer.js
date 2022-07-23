import "./style.css"

export default function footer({counter,deck,footerIcons,setScreen,deckGoal}){
    let finalResult;

    function checkColors(color,index){
        switch(color){
            case("card red"):
            return(
                <div key={index} className="red">
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            );
            case("card yellow"):
            return(
                <div key={index} className="yellow">
                    <ion-icon name="help-circle"></ion-icon>
                </div>
            );
            case("card green"):
            return(
                <div key={index} className="green">
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            )
            default:return(<div>DEU ERRO</div>)
        }
    }

    function restartAll(){
        setScreen(true);
    }

    let iconList = footerIcons.map(checkColors)

    if(counter===deck.length){
        if(footerIcons.includes("card red") || footerIcons.filter((icon)=>(icon==="card green")).length<deckGoal){
            finalResult=
                <div className="final">
                <p>
                    😢 <strong>Putz...</strong><br />
                    Ainda faltam alguns...
                    Mas não desanime!
                </p>
                <div className="restart" onClick={restartAll}>Reiniciar</div>
                </div>
        } else {
            finalResult=
            <div className="final">
            <p>
                🥳 <strong>Parabéns!!!</strong><br/>
                Você não esqueceu de nenhum flashcard!
            </p>
            <div className="restart" onClick={restartAll}>Reiniciar</div>
            </div>
        }
    }

    return(
        <div className="footer">
            {finalResult}
            <p>{counter}/{deck.length} CONCLUÍDOS</p>
            <p>META: {footerIcons.filter((icon)=>(icon==="card green")).length}/{deckGoal} ZAPS</p>
            <div className="check-container">
                {iconList}
            </div>
        </div>
    );
}