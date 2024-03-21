import React from 'react'
import { useParams } from "react-router-dom";
import OffensivePlayerDetail from "../../components/OfffensivePlayerDetail/OffensivePlayerDetail";
import DefensivePlayerDetail from "../../components/DefensivePlayerDetail/DefensivePlayerDetail";


const PlayersPage = () => {
    const { teamId } = useParams();
    
    return (

        <section>
            <OffensivePlayerDetail teamId={teamId} />
            <DefensivePlayerDetail teamId={teamId} />
        </section>

    )
}

export default PlayersPage;