import React from "react";
import PlayerCard from "./PlayerCard.jsx";
import '../PlayerCard/PlayerCard.css';
import { selectAllPlayers } from "./playersSlice.js";

const PlayersList = () => {
    const players = selectAllPlayers();

    return (
        <>
            <img src='../../src/assets/Tennessee_Titans_logo.png' alt='Tennessee Titans Logo' id="titans-logo" />
            <div className="player-list-container">
                {players.map((player) => (
                    <PlayerCard player={player} />
                ))}
            </div>
        </>
    )
}

export default PlayersList