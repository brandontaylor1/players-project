import React from "react";
import { useNavigate } from "react-router-dom";

const TeamPage = () => {
    const navigate = useNavigate();

    const handlePlayersListClick = () => {
        navigate('/players')
    }

    return (
        <section>
            <h1>Team Page</h1>
            <button onClick={handlePlayersListClick}>Players List</button>
        </section>
    )
}


export default TeamPage