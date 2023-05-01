import React, {useState} from "react";
import {Card, Row} from "react-bootstrap";
import SubmitState from './SubmitState'
import HighScoreState from "./HighScoreState";
/**
 Component that displays the win state of the game, including a form for the user to input their name,
 a high score table that shows the current top scores, and the ability to submit the user's score to the server.
 @param {Object} guessList - Object that contains the guess list of the game.
 @returns {JSX.Element} - React component for displaying the win state of the game.
 */
const WinState = ({guessList}) => {
    const [submit, setSubmit]           = useState(false);

    return (<Row className={"mb-4 p-3"}>
            <Card style={{backgroundColor: "rgba(191, 225, 201, 0.79)"}}>
                <Card.Body>
                    { !submit ? (<SubmitState score = {guessList.length} setSubmit = {setSubmit} />): (<HighScoreState submit = {submit} />)}
                </Card.Body>
            </Card>
        </Row>
    );
};

export default WinState;
