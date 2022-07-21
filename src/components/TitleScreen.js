export default function TitleScreen({setScreen}){
    return(
        <div className="title-screen">
            <img src="./assets/logo-new.png" alt="new logo"></img>
            <h1>ZapRecall</h1>
            <div className="button" onClick={()=>setScreen(false)}>Iniciar Recall!</div>
        </div>
    );
}