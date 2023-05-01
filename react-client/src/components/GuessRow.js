/**
 * Renders a row in the guess history table.
 * @param {Object} guessInfo - Information about the guess, including the guess itself and the number of bulls and cows.
 * @param {number} index - The index of the guess in the guess history.
 * @returns {JSX.Element} - A table row displaying the guess information.
 */
const GuessRow = ({guessInfo, index}) =>
{
    return (<tr key={index}>
              <td>{index}</td>
              <td>{guessInfo.guess}</td>
              <td>{guessInfo.bulls}</td>
              <td>{guessInfo.cows}</td>
            </tr>);
}
export default GuessRow;