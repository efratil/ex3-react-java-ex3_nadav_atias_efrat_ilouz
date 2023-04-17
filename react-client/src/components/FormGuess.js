import {Form,Row, Col, Button} from "react-bootstrap";
import SelectButton from "./SelectButton";
import {useState} from "react";

const FormGuess = ({list,updateList,secretList})=>{
    const [guess, setGuess] = useState([null, null, null, null]);

    const checkGuess = () =>{
        const cows =  guess.filter((value, index) => secretList.includes(parseInt(value)) && secretList[index] !== parseInt(value)).length;
        const bulls = guess.filter((value, index) => secretList[index] === parseInt(value)).length;
        return {cows, bulls};
    }
    const handleSubmit = (e) => {
        const guessResult = checkGuess();
        const newList = [...list,
            {   guess: guess[0]+ " " + guess[1] + " " + guess[2] + " " + guess[3],
                bulls: guessResult.bulls,
                cows : guessResult.cows}
        ];
        console.log(newList);
        updateList(newList);
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