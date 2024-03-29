import {Form,Row, Col, Button} from "react-bootstrap";
import SelectButton from "./SelectButton";
import {useState} from "react";
/**
 * FormGuess component allows the user to make a guess in the Bulls and Cows game
@param {Array} list - List of previous guesses and their results
@param {function} updateList - Function to update the list of previous guesses
@param {Array} secretList - List of secret numbers generated by the computer
@param {function} updateMessage - Function to update the message displayed to the user
@returns {JSX.Element} - Form element with input buttons for the user to make a guess and submit it
*/
const FormGuess = ({list,updateList,secretList,updateMessage})=>{
    const [guess, setGuess] = useState([null, null, null, null]);

    /**
     Check if the guess made by the user is correct and calculate the number of bulls and cows
     @returns {Object} - Object containing the number of cows and bulls in the guess made by the user
     */
    const checkGuess = () =>{
        const cows =  guess.filter((value, index) => secretList.includes(parseInt(value)) && secretList[index] !== parseInt(value)).length;
        const bulls = guess.filter((value, index) => secretList[index] === parseInt(value)).length;
        return {cows, bulls};
    }

    /**
     Check if there are any duplicate numbers in the guess made by the user
     @returns {boolean} - Boolean value indicating if there are any duplicate numbers in the guess made by the user
     */
    function hasDuplicates() {
        return new Set(guess).size !== guess.length;
    }
    /**
     Handle the submission of the guess made by the user
     Update the list of previous guesses and their results, and display an appropriate message to the user
     */
    const handleSubmit = () => {
        if (guess.filter((value) => value === null).length > 0){
            updateMessage("Please select 4 digits!");
            return;
        }
        if(hasDuplicates()){
            updateMessage("You selected 2 or more identical numbers");
            return;
        }
        const guessResult = checkGuess();
        const newList = [...list,
            {   guess: guess[0]+ " " + guess[1] + " " + guess[2] + " " + guess[3],
                bulls: guessResult.bulls,
                cows : guessResult.cows}
        ];
        updateList(newList);
        guessResult.bulls !== 4 ? updateMessage(`Your guess: ${guessResult.bulls} Bulls and ${guessResult.cows} Cows`): updateMessage("You Won!");
    }

    return (<Form>
             <Row className={'mb-4 p-3'}>
                <Col>
                   <SelectButton index={0} guess ={guess} setGuess={setGuess} />
                </Col>
                 <Col>
                    <SelectButton index={1} guess ={guess} setGuess={setGuess} />
                 </Col>
                 <Col>
                     <SelectButton index={2} guess ={guess} setGuess={setGuess}/>
                 </Col>
                 <Col >
                     <SelectButton index={3} guess ={guess} setGuess={setGuess} />
                 </Col>
             </Row>
            <Button
                    variant="primary"
                    onClick={(e) => { handleSubmit(e)}}>
             Submit a guess
            </Button>
            </Form>)

}
export default FormGuess;