import {Col, Row} from "react-bootstrap";
import FormGuess from "./FormGuess";
import Info from "./Info";
import GuessHistoryTable from "./GuessHistoryTable";
import React from "react";
/**
 * The `GamePlayState` component renders the game play state of the Bulls and Cows game.
 * It includes a form for submitting guesses, a message to display game feedback,
 * and a table to display the history of previous guesses.
 * @param {Object} props - The props object that contains:
 * @param {Array} guessList - The list of previous guesses
 * @param {Function} setGuessList - A function to update the guess list
 * @param {Array} secretList - The secret list of digits to guess
 * @param {String} message - The game feedback message
 * @param {Function} setMessage - A function to update the game feedback message
 * @returns {JSX.Element} - The `GamePlayState` component's UI
 */
const GamePlayState = ({guessList,message,setGuessList,secretList,setMessage}) =>{
    return (<>
        <Row>
            <FormGuess list = {guessList} updateList={setGuessList} secretList ={secretList} updateMessage = {setMessage}/>
        </Row>
           <Info message = {message}/>
           <Row>
             <Col>
                <GuessHistoryTable list = {guessList} />
             </Col>
          </Row>
        </>);
}
export default GamePlayState;