import "./style.css"
import newLogo from "./logo-new.png"

export default function TitleScreen({setScreen}){
    return(
        <div className="title">
            <img src={newLogo} alt="new logo"></img>
            <div className="title-text">ZapRecall</div>
            <div className="button" onClick={()=>setScreen(false)}>Iniciar Recall!</div>
        </div>
    );
}