import React from "react";
import TitleScreen from "./TitleScreen/TitleScreen"
import DeckScreen from "./DeckScreen";
import "../css/reset.css"
import "../css/style-mobile.css"


export default function App(){
    const [screen, setScreen] = React.useState(true)

    return(
        <div className="content">
            {(screen) ? (<TitleScreen setScreen={setScreen}/>) : (<DeckScreen />)}
        </div>     
    );
}