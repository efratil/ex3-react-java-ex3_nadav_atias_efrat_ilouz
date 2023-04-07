import PickNumber from "./PickNumber";

const NumberGrid = ()=> {
    //const buttons = [for (index of Array(9).keys()) PickNumber(index)];
    const buttons = [...Array(9)].map((_, i) => PickNumber(i))
    return (<div className="d-grid gap-10 d-md-block">
            {buttons}
            </div>);
}
export default NumberGrid;