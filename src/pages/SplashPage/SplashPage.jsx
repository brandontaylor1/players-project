import { React, useEffect } from "react";
import '../SplashPage/SplashPage.css'

const SplashPage = () => {
    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            window.location.href = "/login";
        }, 5000);

        return () => clearTimeout(redirectTimer);
    }, [])


    return (
        <section id="splash-page">
            <div id="splash-page-content">
                <div className="splash-overlay"></div>
                <img src='../../src/assets/jeffSimmons.png' id='splashSimmons'/>

            </div>
        </section>
    )
}

export default SplashPage