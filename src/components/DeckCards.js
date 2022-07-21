export default function DeckCards(){
    return(
        <div>
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
        <div className="card">
            <h2>Pergunta 2</h2>
            <ion-icon name="play-outline"></ion-icon>
        </div>
        <div className="card yellow">
            <h2>Pergunta 3</h2>
            <ion-icon name="help-circle"></ion-icon>
            </div>
        <div className="card green">
            <h2>Pergunta 4</h2>
            <ion-icon name="checkmark-circle"></ion-icon>
        </div>
        </div>
    );
}