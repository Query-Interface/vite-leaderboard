import React, { Fragment } from "react";

interface ScoreProps {
    id: string;
    name: string;
    score: number;
    rank?: number;
}

const Score: React.FC<ScoreProps> = ({id, name, score, rank}: ScoreProps) => {
    const displayValue = name + " - " + score;
    return (
        <li className="score" >
            { displayValue }
        </li>);
}

export default Score;