import {Form} from "react-bootstrap";


const SelectButton = ({index,guess,setGuess} ) =>
{
    const handleSelect = (value) => {
        const newGuess = [...guess];
        newGuess[index] =  value;
        setGuess(newGuess);
    };

    const selectList = [...Array(10)].map((_,index) => { return <option key={index} value={index} > {index } </option> })
    return (<Form.Select required={true} onChange={(e) =>{handleSelect(e.target.value)}}>

            {selectList}
            </Form.Select>);
}
export default SelectButton;