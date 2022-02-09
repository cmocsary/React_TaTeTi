

const Square = ({onClick, player}) => {
    return (
        <button onClick={onClick}>{player}</button>
    );
}

export default Square;