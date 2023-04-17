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