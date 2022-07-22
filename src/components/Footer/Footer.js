import "./style.css"

export default function footer({counter,deck,footerIcons}){
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

    let iconList = footerIcons.map(checkColors)

    if(counter===deck.length){
        if(footerIcons.includes("card red")){
            finalResult=
            <p>
                😢 <strong>Putz...</strong><br/> 
                Ainda faltam alguns...
                Mas não desanime!
            </p>
        } else {
            finalResult=
            <p>
                🥳 <strong>Parabéns!!!</strong><br/>
                Você não esqueceu de nenhum flashcard!
            </p>
        }
    }

    return(
        <div className="footer">
            {finalResult}
            <p>{counter}/{deck.length} CONCLUÍDOS</p>
            <div className="check-container">
                {iconList}
            </div>
        </div>
    );
}