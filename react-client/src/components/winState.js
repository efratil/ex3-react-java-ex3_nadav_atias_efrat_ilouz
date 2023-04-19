import React, { useState } from "react";
import { Card, Row, Form, Button, Table, Col } from "react-bootstrap";

const WinState = ({ guessList }) => {
    const [name, setName] = useState("");
    const [showHighScoreTable, setShowHighScoreTable] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(e.target.elements.name.value);
        setShowHighScoreTable(true);
    };

    return (
        <Row className={"mb-4 p-3"}>
            <Card style={{ backgroundColor: "rgba(191, 225, 201, 0.79)" }}>
                <Card.Body>
                    <Card.Title className={"text-center"}>
                        You won! your score is: {guessList.length}
                    </Card.Title>
                    <Card.Text className={"text-center"}>
                        You may enter your name below to record your score.
                    </Card.Text>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" name="name" placeholder="Enter your name" required/>
                        </Form.Group>
                        <div style={{ marginTop: "10px" }}></div>
                        <Button type="submit">Submit</Button>
                    </Form>

                    {showHighScoreTable && (
                        <div style={{ marginTop: "10px" }}>
                            <Row>
                                <Col>
                                    <Card.Title className={"text-center"} style={{ fontSize: "24px", fontWeight: "bold" }}>
                                        High Score
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
                                        <tr>
                                            <td>1</td>
                                            <td>{name}</td>
                                            <td>{guessList.length}</td>
                                        </tr>
                                        </tbody>
                                    </Table>
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
