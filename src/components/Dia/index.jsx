import React from "react";
import "./index.css";
export default function Dia(props){
    
    const [dia, setDia] = React.useState(1);

    function addCard(){
        setDia(dia + 1);
    }
    
    return(
        <div className="dia" onClick={addCard}>
            <h6>{dia}</h6>
        </div>
    );
}