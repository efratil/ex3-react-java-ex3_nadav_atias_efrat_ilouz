import {Button, Spinner} from "react-bootstrap";
import { useEffect, useState } from 'react';

/**
A lottery of the four numbers the player must guess to win the game
 */
export const randNewSecretList = () =>{
    const shuffleArray = (array) => { // !: Fisher-Yates shuffle algorithm
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const secretList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newList = shuffleArray(secretList).slice(0, 4);
    console.log(newList);
    return newList;
}
/**
 * A component that renders a button to start a new game in the Bulls and Cows game.
 * @param {Object} props - The component props.
 * @param {function} props.initSecretList - A function to initialize the secret list.
 * @param {function} props.initGuessList - A function to initialize the guess list.
 * @param {function} props.initMessage - A function to initialize the message display.
 * @returns {JSX.Element} - A button element.
 */
const StartGame = ({initSecretList, initGuessList, initMessage}) =>{
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        initSecretList(randNewSecretList());
    }, []);

    /**
     * This function is used as an event handler for the click event of the start game button.
     * It initializes the secret list, guess list, and message display with default values.
     */
    const handleClick = async (e) =>{
        setLoading(true);
        initSecretList(randNewSecretList());
        initGuessList ([]);
        initMessage   ("Your history of guesses will appear below:");
        await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 1 second
        setLoading(false);
        e.stopPropagation();
    }

    return (
        <>
            {isLoading ? (
                <Button className="btn btn-success btn-lg me-5" disabled>
                    <Spinner animation="border" role="status" size="sm" />
                </Button> ) : (
                <Button type="button"
                        className="btn btn-success btn-lg me-5"
                        onClick={(e) => handleClick(e) } >
                    Start new game
                </Button>
            )}
        </>
    );
}

export default StartGame;
