import './GamePlayTable.css';
import PickNumber from "./PickNumber";
import CardText from "./CardText";

const GamePlayTable = ({inputFields}) =>{
    //TODO: consider to add a section of contienr and row/col for responsive
    return (
        <div className="card bg-dark text-white  h-50 w-75 mb-2" >
            <div className="card-body align-items-center" >
                {[...Array(4)].map((_, i) => CardText(i, inputFields))}
                <p className="card-text text-end badge bg-success text-wrap me-1 fs-5">Bulls</p>
                <p className="card-text text-end badge bg-info text-wrap me-1 fs-5"   >Cows</p>
            </div>
    </div>

        )
}
export default GamePlayTable;