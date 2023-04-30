import React, {useEffect, useState} from "react";
import {Card, Row, Form, Button, Table, Col} from "react-bootstrap";

const SERVER_URL = "java_react_war/api/highscores";
const WinState = ({guessList}) => {
    const [name, setName] = useState("");
    const [showHighScoreTable, setShowHighScoreTable] = useState(false);
    const [highScores, setHighScores] = useState([]);

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
                });
        }
        fetchData().catch(e => {
            console.log("error");
        })
    }, []);

    const handleNameSubmit = (e) => {
        e.preventDefault();
        setName(e.target.elements.name.value);
        setShowHighScoreTable(true);
    };

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
                    return Promise.resolve(new Error(response.statusText));
                }

            }).catch(e => {
            alert(e.message());
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
