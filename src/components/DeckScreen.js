export default function DeckScreen(){
    return(
        <div className="deck-screen">
            <header>
                <img src="./assets/logo.png" alt="logo"></img>
                <h1>ZapRecall</h1>
            </header>
            <div className="question-before">
                <h2>Pergunta 1</h2>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="question-before">
                <h2>Pergunta 2</h2>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="question-before">
                <h2>Pergunta 3</h2>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="question-before">
                <h2>Pergunta 4</h2>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <footer>
                <p>0/4 CONCLUÍDOS</p>
            </footer>
        </div>
    )
}