import "./style.css"

export default function footer(){

    
    return(
        <div className="footer">
            <p></p>
            <p>0/4 CONCLUÍDOS</p>
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