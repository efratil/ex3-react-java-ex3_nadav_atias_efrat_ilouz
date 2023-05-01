import {Form} from "react-bootstrap";
/**
 * A component that renders a dropdown select for making a guess in the Bulls and Cows game.
 * @param {Object} props - The component props.
 * @param {number} props.index - The index of the guess in the guess array.
 * @param {number[]} props.guess - The current guess array.
 * @param {function} props.setGuess - A function to update the guess array.
 * @returns {JSX.Element} - A dropdown select element.
 */
const SelectButton = ({index,guess,setGuess} ) =>
{
    /**
     * This function is used as an event handler for the onChange event of the select input.
     * It updates the current guess array by copying it, modifying the element at the current
     * index with the new selected value, and updating the state with the new guess array.
     * value: A string representing the value of the selected option
     */
    const handleSelect = (value) => {
        const newGuess = [...guess];
        newGuess[index] =  value;
        setGuess(newGuess);
    };

    const selectList = [...Array(10)].map((_,index) => { return <option key={index} value={index} > {index } </option> })
    return (
        <Form.Select onChange={(e) => {handleSelect(e.target.value); }} defaultValue="guess">
            <option disabled value="guess">guess...</option>
            {selectList}
        </Form.Select>
    );
};
export default SelectButton;