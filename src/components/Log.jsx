export default function Log({gameTurn, player}) {
    return (
    <ol id="log">
        <li>TURN {gameTurn}</li>
        <li>{player}</li>
    </ol>
    );
}