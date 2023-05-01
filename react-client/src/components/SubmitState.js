import {Button, Card, Form, Row, Alert} from "react-bootstrap";
import React, {useState} from "react";
const SERVER_URL = "java_react_war/api/highscores";

const SubmitState = ({score,setSubmit}) =>{
    const [serverError, setServerError] = useState(false);
    /**
     Handles the submit event of the score form and sends the user's name and score to the server.
     */
    const handleScoreSubmit = (e) => {
        e.preventDefault();
        // Send the user's name and score to the server
        const data = {username: e.target.elements.name.value, score: score};
        fetch(SERVER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                setSubmit(true);
            })
            .catch((error) => {
                console.log("Error : ", error);
                setServerError(true);
            });
    };
    return (
                <Row>
                    <Card.Title className={"text-center"}>
                        You won! your score is: {score}
                    </Card.Title>
                    <Card.Text className={"text-center"}>
                        You may enter your name below to record your score.
                    </Card.Text>
                    { serverError && (
                        <Alert variant={'danger'}>
                            Hmm look like we can't save your score. Please try again.
                        </Alert>
                    )
                    }
                    <Form onSubmit={handleScoreSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                            />
                        </Form.Group>
                        <div style={{marginTop: "10px"}}></div>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Row>
                );
}
export default SubmitState;