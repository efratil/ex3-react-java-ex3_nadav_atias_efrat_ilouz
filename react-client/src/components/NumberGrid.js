import PickNumber from "./PickNumber";

const NumberGrid = ()=> {
    const buttons = [...Array(10)].map((_, i) => PickNumber(i))
    return (
        <div className="number-grid-container" >
            {buttons}
        </div>
            );
}
export default NumberGrid;