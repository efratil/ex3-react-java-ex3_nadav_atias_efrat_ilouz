import {Container, Row, Col, Card, Form} from 'react-bootstrap';
import { useState } from 'react';
import StartGame from "./StartGame";
import Background from "./Background";
import background from "../bullsAndCows.jpg";
import GameRules from "./GameRules";
import WinState from "./winState";
import GamePlayState from "./GamePlayState";

const  PlayBoard = () => {

    const [guessList,    setGuessList]       = useState([]);
    const [secretList,   setSecretList]      = useState([]);
    const [message,      setMessage]         = useState("Your history of guesses will appear below:");
    return(
        <>
       <div style={{backgroundImage: `url(${background})`, position: 'fixed', width: '100%', height: '100%', opacity: '0.4', zIndex: '-1'}}></div>
        <Container className={'border'} style={{ backgroundColor:  'rgba(250, 213, 39, 0.9)' }} >
            <Background/>
            <Row >
                <Form className={'p-2'}>
                <StartGame initSecretList = {setSecretList} initGuessList = {setGuessList} initMessage = {setMessage} />
                <GameRules/>
                </Form>
            </Row>
            {message !== "You Won!" ? (<GamePlayState guessList = {guessList} message={message} setGuessList={setGuessList} secretList ={secretList} setMessage = {setMessage}/>):
                ( <WinState guessList = {guessList} />)
            }
        </Container>
        </>
    );
}
export default PlayBoard;
