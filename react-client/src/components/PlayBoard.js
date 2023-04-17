import {Container, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import  GuessHistoryTable from './GuessHistoryTable';
import FormGuess from "./FormGuess";
import StartGame, {randNewSecretList} from "./StartGame";
import Background from "./Background";
import Info from "./Info";

const  PlayBoard = () => {

    const [guessList, setGuessList] = useState([{guess:"1 2 3 4", bulls:0,cows:0}]);
    const [secretList,setSecretList] = useState([]);

    return(
        <Container className="bg-size bg-size-md bg-position-center border" style={{ backgroundColor:  'rgba(255, 255, 0, 0.5)' }} >
            <Background/>
            <Row>
                <StartGame setSecretList = {setSecretList}/>
            </Row>
            <Row>
                <FormGuess list = {guessList} updateList={setGuessList} secretList ={secretList}/>
            </Row>
            <Info/>
            <Row>
                <Col >
                    <GuessHistoryTable list = {guessList} />
                </Col>
            </Row>
        </Container>
    );
}
export default PlayBoard;
