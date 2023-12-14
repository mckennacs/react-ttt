export default function Log({turns}) {
    return (
    <ol id="log">
        {/* `` - template literal used to create row/col index*/}
        {turns.map(turn => <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row}, {turn.square.col}</li>)}
    </ol>

    );
}