import React, {useEffect, useState} from "react";
import {Card, Row, Form, Button, Table, Col} from "react-bootstrap";

const SERVER_URL = "java_react_war/api/highscores";
/**
 Component that displays the win state of the game, including a form for the user to input their name,
 a high score table that shows the current top scores, and the ability to submit the user's score to the server.
 @param {Object} guessList - Object that contains the guess list of the game.
 @returns {JSX.Element} - React component for displaying the win state of the game.
 */
const WinState = ({guessList}) => {
    const [name, setName] = useState("");
    const [showHighScoreTable, setShowHighScoreTable] = useState(false);
    const [highScores, setHighScores] = useState([]);
    const [serverError, setServerError] = useState(false);

    /**
     useEffect hook that fetches the high scores from the server when the component mounts.
     */
    useEffect(() => {
        const fetchData = async () => {
            // Fetch high scores from server
            await fetch(SERVER_URL, {
                method: 'GET',
                headers: {"Content-Type": "application/json",}
            })
                .then((response) => response.json()) // parse response data
                .then((data) => {
                    setHighScores(data);
                })
                .catch((error) => {
                    console.log("Error fetching high scores: ", error);
                    setServerError(true);
                });
        };
        fetchData();
    }, []);

    /**
     Handles the submit event of the name form and updates the name state.
     @param {Object} e - The event object of the form submission.
     */
    const handleNameSubmit = (e) => {
        e.preventDefault();
        setName(e.target.elements.name.value);
        setShowHighScoreTable(true);
    };

    /**
     Handles the submit event of the score form and sends the user's name and score to the server.
     */
    const handleScoreSubmit = () => {
        // Send the user's name and score to the server
        const data = {username: name, score: guessList.length};

        fetch(SERVER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                setShowHighScoreTable(response.ok);
                if (!response.ok) {
                   // return Promise.resolve(new Error(response.statusText));
                    throw new Error(response.statusText);

                }
            })

            .catch((error) => {
                    console.log("Error : ", error);
                    setServerError(true);
                });
    };

    return (
        <Row className={"mb-4 p-3"}>
            <Card style={{backgroundColor: "rgba(191, 225, 201, 0.79)"}}>
                <Card.Body>
                    <>
                        <Card.Title className={"text-center"}>
                            You won! your score is: {guessList.length}
                        </Card.Title>
                        <Card.Text className={"text-center"}>
                            You may enter your name below to record your score.
                        </Card.Text>
                        {!showHighScoreTable && (
                            <Form onSubmit={handleNameSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </Form.Group>
                                <div style={{marginTop: "10px"}}></div>
                                <Button type="submit">Next</Button>
                            </Form>
                        )}
                    </>
                    {showHighScoreTable && (
                        <div style={{marginTop: "10px"}}>
                            <Row>
                                <Col>
                                    {serverError && (
                                        <Form className="text-danger" >
                                            Hmm look like we can't save your score. Please try again.
                                        </Form>
                                    )}
                                    {!serverError && (  <div>

                                    <Card.Title
                                        className={"text-center"}
                                        style={{fontSize: "24px", fontWeight: "bold"}}
                                    >
                                        High Scores
                                    </Card.Title>


                                    <Table striped bordered hover>
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Username</th>
                                            <th>Score</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {highScores.map((score, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{score.name}</td>
                                                <td>{score.score}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td>{highScores.length + 1}</td>
                                            <td>{name}</td>
                                            <td>{guessList.length}</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                        </div>
                                    )}
                                    <Button onClick={handleScoreSubmit}>Submit</Button>
                                </Col>
                            </Row>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </Row>
    );


};

export default WinState;
