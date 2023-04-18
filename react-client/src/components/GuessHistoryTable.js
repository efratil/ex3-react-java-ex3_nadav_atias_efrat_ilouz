import {Table} from 'react-bootstrap';
import GuessRow from "./ GuessRow";

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
