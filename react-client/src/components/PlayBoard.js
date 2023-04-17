import {Container, Row, Col, Card} from 'react-bootstrap';
import { useState } from 'react';
import  GuessHistoryTable from './GuessHistoryTable';
import FormGuess from "./FormGuess";
import StartGame, {randNewSecretList} from "./StartGame";
import Background from "./Background";
import Info from "./Info";
import background from "../bullsAndCows.jpg";

const  PlayBoard = () => {

    const [guessList, setGuessList] = useState([{guess:"1 2 3 4", bulls:0,cows:0}]);
    const [secretList,setSecretList] = useState([]);

    return(
        <>
            <div style={{backgroundImage: `url(${background})`, position: 'fixed', width: '100%', height: '100%', opacity: '0.4', zIndex: '-1'}}></div>
    <Container className="border" style={{ backgroundColor:  'rgba(250, 213, 39, 0.9)' }} >
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
        </>

    );
}
export default PlayBoard;
