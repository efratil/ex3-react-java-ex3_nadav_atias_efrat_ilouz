import {Button, Spinner} from "react-bootstrap";
import { useEffect, useState } from 'react';

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

const StartGame = ({initSecretList, initGuessList, initMessage}) =>{
    const [isLoading, setLoading] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const handleClick = async (e) =>{
        setLoading(true);
        initSecretList(randNewSecretList());
        initGuessList ([]);
        initMessage   ("Your history of guesses will appear below:");
        await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 1 second
        setLoading(false);
        e.stopPropagation();
    }

    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            initSecretList(randNewSecretList());
        }
    }, [isFirstRender, initSecretList]);

    return (
        <>
            {isLoading ? (
                <Button className="btn btn-success btn-lg me-5" disabled>
                    <Spinner animation="border" role="status" size="sm" />
                    <span className="visually-hidden">Loading...</span>
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
