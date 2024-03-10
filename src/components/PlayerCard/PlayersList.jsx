import React from "react";
import PlayerCard from "./PlayerCard";
import { selectAllPlayers } from "./playersSlice";

const PlayersList = () => {
    const players = selectAllPlayers();
    return (
        <main className="player-list-container">
            {players.map((player) => (
                <PlayerCard player={player} />
            ))}
        </main>
    )
}

export default PlayersList