import logo from "./logo.png"
import "./style.css"

export default function Header(){
    return(
        <div className="header">
            <img src={logo} alt="logo"></img>
            <span className="title-text">ZapRecall</span>
        </div>
    );
}