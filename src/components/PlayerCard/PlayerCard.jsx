import React from "react";
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';

const PlayerCard = () => {
    const {id, first_name, last_name, team, position, number, age, height, weight, college, imageURL} = PLAYERS;
    let full_name = `${first_name} ${last_name}`; 
        return (
            <Card className="player-card">
                <CardImg className="player-image-wrapper">
                    <img className="player-image" src={imageURL} alt={full_name}/>
                </CardImg>
                <CardTitle>{full_name}</CardTitle>
                <CardBody>
                    <h3>{team}</h3>
                    <p>Position: {position}</p>
                    <p>Number: {number}</p>
                    <p>Age: {age}</p>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                    <p>College: {college}</p>
                </CardBody>

            </Card>

    )
}

export default PlayerCard; 