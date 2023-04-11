import './Background.css';
import NumberGrid from "./NumberGrid";
import GamePlayTable from "./GamePlayTable";
import StartGame from "./StartGame";
import Go from "./Go";
import {useState} from "react";
const Background = () => {
    const [inputFields, renderInput] = useState(Array(4).fill('?'))

    return(
        <section className="w-100 px-4 py-5 background" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <div className="row d-flex justify-content-center">
                <div >
                <GamePlayTable
                    inputFields = {inputFields}
                />
                <NumberGrid
                    inputFields = {inputFields}
                />
                </div>
                <div> <Go/>   <StartGame/></div>

            </div>
         </section>);
}

export default Background;