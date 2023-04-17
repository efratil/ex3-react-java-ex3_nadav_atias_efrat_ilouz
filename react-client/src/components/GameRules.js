import {Button, Card, Collapse, Row} from "react-bootstrap";
import {useState} from "react";

const GameRules = () =>{
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                type="button"
                className="btn btn-info btn-lg"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Game Rules
            </Button>
            <Collapse in={open} className={'p-2 mt-2'}>
                <Card id="example-collapse-text" style={{ backgroundColor: 'rgba(24, 123, 47, 0.27)' }}>
                    <Card.Body >
                        <Card.Text className="text-center">
                            The program generates a 4 digits numbers, while the player tries to guess it.
                            Each digit appears at most once. e.g. 1234 is valid, but 1233 is not valid.
                            For every guess that the player makes, we display 2 values:
                            The number of bulls: 1 bull means the guess contains and the target number have 1 digit in
                            common, and in the correct position.
                            The number of cows:
                            1 cow means the guess and the target have 1 digit in common, but not in
                            correct position.
                            For example if the number to guess is 1234. Guessing 4321 will give 0 bulls and 4 cows. 3241
                            will give 1 bull and 3 cows.
                            4 bulls means that you won the game.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Collapse>
        </>
    );
}
export default GameRules;