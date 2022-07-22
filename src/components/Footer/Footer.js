import "./style.css"

export default function footer({counter,deck,footerIcons}){
    function checkColors(color){
        switch(color){
            case("card red"):
            return(
                <div className="red">
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            );
            case("card yellow"):
            return(
                <div className="yellow">
                    <ion-icon name="help-circle"></ion-icon>
                </div>
            );
            case("card green"):
            return(
                <div className="green">
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            )
        }
    }

    let iconList = footerIcons.map(checkColors)
    return(
        <div className="footer">
            <p></p>
            <p>{counter}/{deck.length} CONCLUÍDOS</p>
            <div className="check-container">
                {iconList}
            </div>
        </div>
    );
}