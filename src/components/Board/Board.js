import { useState } from 'react';
import Square from '../Square/Square';
import './Board.css'

const Board = () =>{

const [player, setPlayer] = useState('X')
const [game, setGame] = useState(['', '', '', '', '', '', '', '', ''])

const handlePLay = (position) => {
    let newGame = game
    
    if(newGame[position] === ''){
        newGame[position] = player
        setGame(newGame)
        if(player === 'X'){
            setPlayer('O')
        }else{
            setPlayer('X')
        }
    }else{
        console.log('Juega otra casilla')
    }
}

    return (
        <>
            <div>
            <Square onClick={()=>{handlePLay(0)}} player={game[0]}/>
            <Square onClick={()=>{handlePLay(1)}} player={game[1]}/>
            <Square onClick={()=>{handlePLay(2)}} player={game[2]}/>
            </div>
            <div>
            <Square onClick={()=>{handlePLay(3)}} player={game[3]}/>
            <Square onClick={()=>{handlePLay(4)}} player={game[4]}/>
            <Square onClick={()=>{handlePLay(5)}} player={game[5]}/>
            </div>
            <div>
            <Square onClick={()=>{handlePLay(6)}} player={game[6]}/>
            <Square onClick={()=>{handlePLay(7)}} player={game[7]}/>
            <Square onClick={()=>{handlePLay(8)}} player={game[8]}/>
            </div>
        </>
            
    );
}

export default Board;