import Dia from "../Dia";
import "./index.css";
export default function Semana(props){

    function generateDays(days){
        let cDays = []
        for(let i = 1; i <= days; i++) {
            cDays.push(<li><Dia dia="{i}" /></li>);
        }
        return cDays;
    }
    return(
        <>
            <h2>Semana</h2>
            <ul className="titles">
                <li>Segunda</li>
                <li>Terça</li>
                <li>Quarta</li>
                <li>Quinta</li>
                <li>Sexta</li>
                <li>Sábado</li>
                <li>Domingo</li>
            </ul>
            <ul className="dias">
                {generateDays(props.dias)}
            </ul>
        </>
    );
}