import React from 'react';
import { Board } from "./api/leaderboard-api";
import Score from './Score';

interface BoardProps {
    board: Board;
}

const LeaderBoard: React.FC<BoardProps> = ({board}: BoardProps) => {
    return (
    <div className="board" key={board.id}>
        <span className="boardTitle">{board.name}</span>
        <ul>
            { board.scores.map((row) => <Score {...row} key={row.id} />) }
        </ul>
    </div>);
};

export default LeaderBoard;