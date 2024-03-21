import React, { useState, useEffect } from "react";  
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, CardLink, ListGroup, ListGroupItem } from 'reactstrap';

const OffensivePlayerDetail = () => {

    const [sortedPlayers, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { teamId } = useParams();

    useEffect(() => {

        const fetchPlayers = async () => {
            try {
                const url = `https://nfl-api-data.p.rapidapi.com/nfl-player-listing/v1/data?id=${teamId}`;
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'ba5bba66e7msh4d67f7a5909ce85p1001bdjsnefb21fbd6220',
                        'X-RapidAPI-Host': 'nfl-api-data.p.rapidapi.com'
                    }
                };

            const response = await fetch(url, options);
            const result = await response.json();
            const positionOrder = {
                QB: 1,
                RB: 2,
                FB: 3,
                WR: 4,
                TE: 5,
                C: 6,
                G: 7,
                T: 8,
                // NT: 9,
                // DT: 10,
                // DE: 11,
                // ILB: 12,
                // OLB: 13,
                // CB: 14, 
                // S: 15,
                // K: 16,
                // P: 17,
                // LS: 18, 
            }

            const sortedPlayers = 
                result.athletes[0].items.sort((a, b) => {
                const positionA = a.position.abbreviation;
                const positionB = b.position.abbreviation;
                const orderA = positionOrder[positionA] || Infinity;
                const orderB = positionOrder[positionB] || Infinity;

                return orderA - orderB; 
            })

            setPlayers(sortedPlayers);
            setLoading(false);

            } catch (error) {
                console.log(error);
                setError(error.message)
                setLoading(false)
            }
        }
        fetchPlayers(); 
    }, [teamId])

    if(loading) return <h1>Loading...</h1> 
    if(error) return <h1>Something went wrong! {error}</h1>

    console.log("Here", sortedPlayers)

    return (    
        <section>
            <h2 style={{
                fontSize: '2vw',
                fontWeight: 'bold',
            }}>Offensive Players</h2>
            <ul>   
            {sortedPlayers.map((player) => {
                    const playerId = player.id;
                    const playerName = player.displayName;
                    const playerPosition = player.position.abbreviation;
                    const playerNumber = player.jersey;
                    const playerHeight = player.displayHeight;
                    const playerWeight = player.displayWeight;
                    const playerImage = player.headshot.href;
                    const playerImageAlt = player.headshot.alt
                    const playerDOB = player.dateOfBirth;
                    const formatedDOB = new Date(playerDOB).toLocaleDateString('en-US', {month: 'short', day: '2-digit', year: 'numeric'});
                    const age = player.age;
                        return (
                        <Card key={playerId}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                width: '18rem',
                                backgroundColor: 'white',
                                border: '1px solid lightgray',
                                color: 'black',
                                borderRadius: '20px',
                                margin: '10px',
                                padding: '10px',
                                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                            }}>
                            <img className="Card" src={playerImage} alt={playerImageAlt}/>
                            <CardBody>
                                <CardTitle tag="h2">
                                    <h2 style={{
                                        fontweight: 'bold',
                                        fontSize: '1.25vw',
                                        marginBottom: '10px'
                                    }}>{playerName}</h2>
                                </CardTitle>
                                <CardText style={{
                                    textAlign: 'center',  
                                    fontweight: 'bold',
                                    fontSize: '1vw',
                                    marginTop: '-20px'
                                }}>
                                <span style={{
                                    position: 'absolute',
                                    top: '5px',
                                    left: '5px',
                                    color: 'black',
                                    opacity: '0.1',
                                    fontWeight: 'bold',
                                    fontSize: '3vw'     
                                }}>{playerPosition}</span> 
                                <span style={{
                                    position: 'absolute',
                                    top: '5px',
                                    right: '5px',
                                    color: 'black',
                                    opacity: '0.1',
                                    fontWeight: 'bold',
                                    fontSize: '3vw'     
                                }}>{playerNumber}</span>
                                </CardText>
                            </CardBody>
                            <ListGroup flush>
                                <ListGroupItem>
                                Ht: {playerHeight}   |   Wt: {playerWeight} | Spd: 99
                                </ListGroupItem>
                                <ListGroupItem>
                                College: {player.college.name} | Exp: {player.experience.years}
                                </ListGroupItem>
                                <ListGroupItem>
                                DOB: {formatedDOB}   |   Age: {age}
                                </ListGroupItem>
                                <ListGroupItem>
                                Birthplace: {player.birthPlace.city}, {player.birthPlace.state}
                                </ListGroupItem>
                            </ListGroup>
                            <CardBody>
                                <CardLink href="#">
                                <button style={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    padding: '10px',
                                    borderRadius: '10px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    margin: '5px',
                                    width: '100px'
                                }}>Stats</button>
                                </CardLink>
                                <CardLink href="#">
                                <button style={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    padding: '10px',
                                    borderRadius: '10px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    margin: '5px',
                                    width: '100px'
                                }}>News</button>
                                </CardLink>
                            </CardBody>
                        </Card>
                        )
                })}
            </ul>
        </section> 
    )
}

export default OffensivePlayerDetail;