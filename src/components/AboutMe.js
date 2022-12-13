import React from "react"
import Professional from "./Professional"
import Header from "./Header"
import clown from "../images/Clown.png"
import baker from "../images/BakingH.jpg"
import weird from "../images/Weird-H.jpg"

const AboutMe = () => {
    return (
        <>
            <Header clown={clown}/>
            <div className="about">
                <section className="professional">
                    <Professional />
                    <img src={baker} alt="harmony baking" />
                </section>
                <section className="musical">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ddSUUGBrFsU" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" allowfullscreen></iframe>
                </section>
                <section className="weird">
                    <img src={weird} alt="Harmony as Weird Al" />
                </section>
            </div>
            <footer>Harmony Luise Brown 2022</footer>
        </>
    )
}

export default AboutMe