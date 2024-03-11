import React from "react";
import '../PlayerCard/PlayerCard.css';

const PlayerCard = ({player}) => {
    const { id, first_name, last_name, team, position, number, age, height, weight, college, years_experience, imageURL} = player;
    let full_name = `${first_name} ${last_name}`; 
        
        return (
            <div className="player-card" key={id}>
                <div className="image-wrapper">
                    <img className="player-image" src={imageURL} alt={full_name}/>
                </div>
                    <div className="player-info">
                        <h1>{full_name}</h1>
                        <p>{position} #{number}</p>
                    </div>
                    <h3>{team}</h3>
                    <p>HT: {height} WT: {weight}</p>        
                    <p>Age: {age} Exp: {years_experience}</p>
                    <p>College: {college}</p>   
            </div>
    )
}

export default PlayerCard; 