import React, { useState } from "react";
import { Card, Row, Form, Button } from "react-bootstrap";

const WinState = ({ guessList }) => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // servelt
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
                            <Form.Control type="name" placeholder="Enter your name" required />
                        </Form.Group>
                        <div style={{ marginTop: '10px' }}></div>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Row>
    );
};

export default WinState;
