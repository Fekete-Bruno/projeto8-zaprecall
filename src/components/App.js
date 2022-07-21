import React from "react";
import TitleScreen from "./TitleScreen"
import DeckScreen from "./DeckScreen";


export default function App(){
    const [screen, setScreen] = React.useState(false)

    return(
        <div className="content">
            {(screen) ? (<TitleScreen setScreen={setScreen}/>) : (<DeckScreen />)}
        </div>     
    );
}