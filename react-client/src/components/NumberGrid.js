import PickNumber from "./PickNumber";
import './NumberGrid.css';

const NumberGrid = ()=> {
    //const buttons = [for (index of Array(9).keys()) PickNumber(index)];
    const buttons = [...Array(9)].map((_, i) => PickNumber(i))
    return (
        <div className="number-grid-container">
            {buttons}
        </div>
            );
}
export default NumberGrid;