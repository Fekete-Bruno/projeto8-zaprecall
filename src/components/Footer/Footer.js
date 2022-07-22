import "./style.css"

export default function footer({counter,deck}){

    return(
        <div className="footer">
            <p></p>
            <p>{counter}/{deck.length} CONCLUÍDOS</p>
            <div className="check-container">
                <div className="green">
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div className="green">
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div className="yellow">
                    <ion-icon name="help-circle"></ion-icon>
                </div>
                <div className="red">
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            </div>
        </div>
    );
}