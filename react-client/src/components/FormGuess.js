import {Form,Row, Col, Button} from "react-bootstrap";
import SelectButton from "./SelectButton";
import {useState} from "react";

const FormGuess = ({list,updateList,secretList,updateMessage})=>{
    const [guess, setGuess] = useState([null, null, null, null]);

    const checkGuess = () =>{
        const cows =  guess.filter((value, index) => secretList.includes(parseInt(value)) && secretList[index] !== parseInt(value)).length;
        const bulls = guess.filter((value, index) => secretList[index] === parseInt(value)).length;
        return {cows, bulls};
    }
    function hasDuplicates() {
        return new Set(guess).size !== guess.length;
    }
    const handleSubmit = () => {
        if (guess.filter((value) => value === null).length > 0){
            updateMessage("Please Select 4 Digits !");
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
        guessResult.bulls !== 4 ? updateMessage(`Your Guess: ${guessResult.bulls} Bulls & ${guessResult.cows} Cows`): updateMessage("You Won!");
    }

    return (<Form>
             <Row className={'mb-4 p-3'}>
                <Col>
                   <SelectButton index={0} guess ={guess} setGuess={setGuess} />
                </Col>
                 <Col>
                    <SelectButton index={1} guess ={guess} setGuess={setGuess}/>
                 </Col>
                 <Col>
                     <SelectButton index={2} guess ={guess} setGuess={setGuess}/>
                 </Col>
                 <Col >
                     <SelectButton index={3} guess ={guess} setGuess={setGuess}/>
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