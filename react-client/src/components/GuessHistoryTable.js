import {Table} from 'react-bootstrap';
import GuessRow from "./ GuessRow";

const GuessHistoryTable = ({list}) =>
{
    const listItems = list.map((guess,i) => <GuessRow guessInfo = {guess} index = {i + 1} />);

    return (<Table striped bordered hover>
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