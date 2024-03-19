import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './TeamPage.css';

const TeamPage = () => {
    const navigate = useNavigate();
    const handlePlayersListClick = () => {
        navigate('/players')
    }
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
     
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://nfl-api-data.p.rapidapi.com/nfl-team-listing/v1/data';
            const options = {
                method: 'GET',
	            headers: {
                    'X-RapidAPI-Key': 'ba5bba66e7msh4d67f7a5909ce85p1001bdjsnefb21fbd6220',
		            'X-RapidAPI-Host': 'nfl-api-data.p.rapidapi.com'
	                    }   
                    };   
            try {
                const response = await fetch(url, options);
                if(!response.ok) {
                    throw new Error('Something went wrong, failed to Fetch Data!');
                } 
                const result = await response.json();
                setData(result);
                setLoading(false);
                console.log("Fetched Data: ", data);
                
            } catch(error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    console.log("Data: ", data);

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Something went wrong! {error}</h1>

    return (
        <section className="teampage-section">
        <h1>Team Pages</h1>
            {data.length > 0 ? (
               <ul>
                {data.map((team, index) => {
                    return (
                            <Link to={`/teampage/${data[index].team.id}`} key={index}> {/* This is the link to the team detail page */}
                                <div className='team-div'>
                                    <h2>{data[index].team.displayName}</h2>
                                    <img src={data[index].team.logos[0].href} alt="team-logo" />
                                </div>
                            </Link>
                        )
                    })}
                </ul>
            ) : (
                <p>No data available</p>
            )}
        <button onClick={handlePlayersListClick}>Players List</button>
        <img src='../../src/assets/National_Football_League_logo.png' id='teampage-nfl-logo' alt='nfl-logo' />
    </section>
    )
}


export default TeamPage