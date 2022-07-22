import logo from "../assets/logo.png"

export default function Header(){
    return(
        <header>
            <img src={logo} alt="logo"></img>
            <h1>ZapRecall</h1>
        </header>
    );
}