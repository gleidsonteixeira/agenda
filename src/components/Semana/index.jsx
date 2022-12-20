import { render } from "@testing-library/react";
import Dia from "../Dia";

export default function Semana(props){
    return(
        <>
            <h2>Semana</h2>
            {
                for(let i = 0; i < 6; i++){
                    <Dia dia={i}/>
                }
            }
        </>
    );
}