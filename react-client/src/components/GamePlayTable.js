import './GamePlayTable.css';
import PickNumber from "./PickNumber";

const GamePlayTable = () =>{
    const buttons = [...Array(4)].map((_, i) => PickNumber('?'))
    return (<div className="card">
            <div className="card-body">
                {buttons}
            </div>
    </div>);
}
export default GamePlayTable