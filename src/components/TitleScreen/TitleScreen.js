import "./style.css"
import newLogo from "./logo-new.png"

export default function TitleScreen({setScreen}){
    return(
        <div className="title">
            <img src={newLogo} alt="new logo"></img>
            <h1>ZapRecall</h1>
            <button onClick={()=>setScreen(false)}>Iniciar Recall!</button>
        </div>
    );
}