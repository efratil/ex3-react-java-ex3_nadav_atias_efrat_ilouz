import {Button, Card, Collapse} from "react-bootstrap";
import {useState} from "react";

/**
 GameRules component displays a button which, when clicked, expands a collapsible card that contains the game rules.
 The game is about guessing a 4-digit number with no repeated digits. For every guess that the player makes,
 the number of bulls and cows are displayed. Bulls represent the number of digits that appear in both the guess and the target number
 in the correct position, while cows represent the number of digits that appear in both the guess and the target number, but in the wrong position.
 When the player guesses the target number with all digits in the correct position, they win the game.
 @returns JSX element that displays the button for the game rules and the collapsible card with the rules
 */
const GameRules = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                type="button"
                className={'btn btn-info btn-lg'}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Game rules
            </Button>
            <Collapse in={open} className={'mt-2'}>
                <div>
                    <Card id="example-collapse-text" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding:"20px"}}>
                        The program generates a 4 digits numbers, while the player tries to guess it.<br />
                        Each digit appears at most once. e.g. 1234 is valid, but 1233 is not valid.<br />
                        For every guess that the player makes, we display 2 values:.<br />
                        The number of bulls: 1 bull means the guess contains and the target number have 1 digit in.<br />
                        common, and in the correct position..<br />
                        The number of cows:.<br />
                        1 cow means the guess and the target have 1 digit in common, but not in.<br />
                        correct position..<br />
                        For example if the number to guess is 1234. Guessing 4321 will give 0 bulls and 4 cows. 3241.<br />
                        will give 1 bull and 3 cows..<br />
                        4 bulls means that you won the game..<br />
                    </Card>
                </div>
            </Collapse>
        </>
    );
};

export default GameRules;
