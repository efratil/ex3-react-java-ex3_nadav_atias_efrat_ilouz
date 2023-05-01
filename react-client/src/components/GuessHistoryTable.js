import {Table} from 'react-bootstrap';
import GuessRow from "./GuessRow";

/**
 * Renders a table displaying the history of guesses made by the user
 * @param {Array} list - An array of objects representing the user's guess history
 * @returns {JSX.Element} - A table displaying the guess history
 */
const GuessHistoryTable = ({list}) =>
{
    const listItems = list.map((guess,i) => <GuessRow key={`guess-row-${i}`} guessInfo = {guess} index = {i + 1} />);

    return (<Table striped bordered hover style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <thead>
            <tr key={0}>
                <th>#</th>
                <th>Guess</th>
                <th>Bulls</th>
                <th>Cows</th>
            </tr>
            </thead>
            <tbody>
            {listItems}
            </tbody>
        </Table>
    );
}

export default GuessHistoryTable;
