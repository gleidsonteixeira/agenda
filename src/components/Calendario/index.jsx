import Semana from "../Semana";
import "./index.css";
export default function Calendario(){
    
    let calendario = new Date();

    function getDaysOfMonth(year = null, month = null){
        return new Date(year, month, 0).getDate();
    }

    function getMonthCurrent(){
        let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        return meses[calendario.getMonth()];
    }

    return(
        <div id="calendario">
            <h1>Calendario({getMonthCurrent()})</h1>
            <div className="calendario">
                <Semana dias={getDaysOfMonth(calendario.getFullYear(), calendario.getMonth())} />
            </div>
        </div>
    );
}