import React from "react";
import PlayerCard from "./PlayerCard.jsx";
import '../PlayerCard/PlayerCard.css';
// import { selectAllPlayers } from "./playersSlice.js";


const PlayersList = ({players, handleDelete, filterByPosition}) => {
    // const players = selectAllPlayers();

    return (
        <section className="player-list">
            <div className="sidebar">
                <div className="btn-container">
                    <button type="button" onClick={() => filterByPosition('QB')}>QB</button>
                    <button type="button" onClick={() => filterByPosition('RB')}>RB</button>
                    <button type="button" onClick={() => filterByPosition('WR')}>WR</button>
                    <button type="button" onClick={() => filterByPosition('TE')}>TE</button>
                    <button type="button" onClick={() => filterByPosition('OL')}>OL</button>
                    <button type="button" onClick={() => filterByPosition('DL')}>DL</button>
                    <button type="button" onClick={() => filterByPosition('LB')}>LB</button>
                    <button type="button" onClick={() => filterByPosition('CB')}>CB</button>
                    <button type="button" onClick={() => filterByPosition('S')}>S</button>
                </div>
            </div>
            <div className="player-list-container">
                {players.map((player) => (
                    <PlayerCard 
                        key={player.id} 
                        player={player}
                        filterByPosition={filterByPosition}
                        handleDelete={handleDelete}
                        />
                ))}
            </div>
        </section>
    )
}

export default PlayersList