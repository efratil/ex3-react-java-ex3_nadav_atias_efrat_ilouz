import {Button, Col, Form} from "react-bootstrap";

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
const StartGame = ({initSecretList, initGuessList, initMessage})=>{

    const handleClick = (e) =>{
        initSecretList(randNewSecretList());
        initGuessList ([]);
        initMessage   ("Your history of guesses will appear below:");
        e.stopPropagation();
    }
    return (<Button type="button"
                                           className="btn btn-success btn-lg me-5"
                                           onClick={(e) => handleClick(e) }
                                    >Start new game
                                    </Button>
    );
}
export default StartGame;