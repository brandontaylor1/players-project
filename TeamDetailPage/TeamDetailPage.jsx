import React, { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import './TeamDetailPage.css';

const TeamDetailPage = () => {
    const navigate = useNavigate();
    const { teamId } = useParams();

    const handlePlayersClick = () => {
        navigate(`/teampage/${teamId}/players`)
    }

    const [team, setTeam] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeamDetails = async () => {
            const url = `https://nfl-api-data.p.rapidapi.com/nfl-team-info/v1/data?id=${teamId}`;
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
                    throw new Error('Houston...we have an issues!')
                }
                
                const result = await response.json();
                setTeam(result);
                setLoading(false);
                console.log("Data: ", result)
                
                
                
            } catch (error) {
                setError(error.message)
                setLoading(false)
        }
    };
    fetchTeamDetails();
}, [teamId]);

console.log('Data outside Try/Catch: ', team);

if(loading) return <h1>Loading...</h1>
if(error) return <h1>Something went wrong! {error}</h1>

const backgroundColor = `#${team.team.color}`;
  
    return (
        <section className="team-detail-section" style={{backgroundColor}}>
            <header>
                <img src={team.team.logo} alt="team-logo" />
                <div>
                    <h1>{team.team.displayName.toUpperCase()}</h1>
                    <h2>Head Coach: {team.coach[0].firstName} {team.coach[0].lastName}</h2>
                    <h3>{team.season.year} Record: {team.team.recordSummary}</h3>
                    <h3>{team.team.standingSummary}</h3>
                </div>
            <div className="button-container">
                <button onClick={handlePlayersClick}>Players</button>
                <button onClick={() => navigate('/teampage')}>Back to Teams</button>
            </div>    
            </header>
        </section>


    )
} 

export default TeamDetailPage;