import React from "react";
import './SelectorPage.css'
import { useNavigate } from "react-router-dom";

const SelectorPage = () => {

    const navigate = useNavigate();

    const handleTeamPageClick = () => {
        navigate('/teampage')
    }


    return (
        <section className="selector-section">
            <h1>OMNI</h1>
            <h2>TITANS SCOUTING</h2>
            <div className="selector-container">
                <button className="selector-button" onClick={handleTeamPageClick}>
                    <img src="../../src/assets/National_Football_League_Logo.png" alt="NFL Logo" />
                </button>
                <button className="selector-button">
                    <img src="../../src/assets/NCAA_logo.png" alt="NCAA Logo" />
                </button>
            </div>
            <div className="selector-image-container">
                        <img src="../../src/assets/National_Football_League_logo.png" id="loginNFL"/>
                        <img src="../../src/assets/Tennessee_Titans_logo.png" id="loginTitans"/>
                    </div>
                <footer>
                    <p><span id='footer-span'>Tennessee Titans</span> Football Club</p>
                    <p>Copyright 2024</p>
                </footer>
        </section>
    )
}


export default SelectorPage;

