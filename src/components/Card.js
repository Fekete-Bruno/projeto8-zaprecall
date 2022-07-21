export default function Card({index,card}){
    
    let started=false;

    function startQuestion(card){
        if(card.status==="card" && !started){
            
        }
    }

    if(card.status==="card"){
    return(
        <div className={card.status} onClick={()=>{startQuestion(card)}}>
            <h2>Pergunta {index}</h2>
            <div className="icon"><ion-icon name="play-outline"></ion-icon></div>
        </div>
    );}
}