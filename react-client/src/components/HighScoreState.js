import {Card, Col, Row, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
const SERVER_URL = "java_react_war/api/highscores";

const HighScoreState =  ({submit}) => {
    const [highScores, setHighScores] = useState([]);
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
                    //setServerError(true);
                });
        };
        fetchData().then(r => {});
    }, [submit]);
    return (<div style={{marginTop: "10px"}}>
        <Row>
            <Col>
                <Card.Title className={"text-center"} style={{fontSize: "24px", fontWeight: "bold"}}>
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
                                    <td>{score.username}</td>
                                    <td>{score.score}</td>
                                </tr>
                            ))}
                            </tbody>
                </Table>
            </Col>
        </Row>
    </div>
    );
}
export default HighScoreState;