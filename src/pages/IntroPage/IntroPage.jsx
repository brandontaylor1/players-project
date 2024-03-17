import { React, useEffect } from "react";
import '../IntroPage/IntroPage.css';


const IntroPage = () => {
    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            window.location.href = "/splash";
        }, 5000);

        return () => clearTimeout(redirectTimer);
    }, [])

    return (
        <section id="intro-page">
            <div id="intro-page-content">
               <img src='../../src/assets/Tennessee_Titans_logo.png' id='introTitans'/>
            </div>
        </section>
    )
}

export default IntroPage
