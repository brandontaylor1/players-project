import React from "react";
import '../PlayerCard/PlayerCard.css';
import { FaCircle, FaTimes, FaTimesCircle } from 'react-icons/fa';
import { useState } from 'react';
import Button from "../../shared/Button";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, CardLink } from 'reactstrap';

const PlayerCard = ({player, handleDelete, filterByPosition}) => {
    //const { id, first_name, last_name, team, position, number, age, height, weight, college, years_experience, imageURL} = player;
    let full_name = `${player.first_name} ${player.last_name}`; 

        return (
            <>

                <Card className="player-card" key={player.id} id="player-card">
                    <img alt="Card" src={player.imageURL} id="player-image"/>
                        <button id='delete-btn' type="button" onClick={() => handleDelete(player.id)}>
                            <FaTimesCircle className="delete-icon" />
                        </button>   
                    <CardBody id="player-card-body">
                        <CardTitle tag="h5" id="player-name">
                            {full_name}
                        </CardTitle>
                        <CardText>
                            {player.position} #{player.number}
                        </CardText>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem>
                            HT: {player.height} WT: {player.weight}
                        </ListGroupItem>
                        <ListGroupItem>
                            Age: {player.age} Exp: {player.years_experience}
                        </ListGroupItem>
                        <ListGroupItem>
                            College: {player.college}
                        </ListGroupItem>
                    </ListGroup>
                    <CardBody>
                        <CardLink href="#">
                            <Button>Edit Player</Button>
                        </CardLink>
                        <CardLink href="#">
                            <Button>CLick Me</Button>
                        </CardLink>
                    </CardBody>
                        <div>
                                <img src='../../src/assets/Tennessee_Titans_logo.png' alt='titanslogosmall' id="titanslogosmall"/>
                        </div> 
                    </Card>
                    </>                              
                )
            }
                                  
export default PlayerCard; 


            {/* <button type="button" onClick={() => filterByPosition('LB')}>

            </button>
            <div className="player-card" key={player.id}>
                <div className="image-wrapper">
                    <img className="player-image" src={player.imageURL} alt='Full name'/>
                </div>
                    <div className="player-info">
                        <h1>{full_name}</h1>
                        <p id="playerPosition">{player.position}</p><br />
                        <h2>{player.number}</h2>
                    </div>
                    <div className="player-stats-wrapper">
                        <div className="player-stats">
                            <h2>{player.team}</h2>
                            <p>HT: {player.height} WT: {player.weight}</p>        
                            <p>Age: {player.age} Exp: {player.years_experience}</p>
                            <p>College: {player.college}</p>   
                        </div>
                    </div>
                </div> */}

