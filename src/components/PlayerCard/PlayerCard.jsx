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
                    <div className="player-position-wrapper">
                        <p>{position}</p>
                        <p># {number}</p>
                    </div>
                    </div>
                    <div className="player-stats-wrapper">
                        <div className="player-stats">
                            <h2>{team}</h2>
                            <p>HT: {height} WT: {weight}</p>        
                            <p>Age: {age} Exp: {years_experience}</p>
                            <p>College: {college}</p>   
                        </div>
                       <div>
                            <img src='../../src/assets/Tennessee_Titans_logo.png' alt='titanslogosmall' />
                       </div> 
                    </div>
            </div>
    )
}

export default PlayerCard; 