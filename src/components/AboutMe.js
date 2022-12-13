import React from "react"
import Professional from "./Professional"
import Header from "./Header"
import clown from "../images/Clown.png"
import baker from "../images/BakingH.jpg"
import weird from "../images/Weird-H.jpg"
import foxes from "../images/foxCookies.JPG"
import gordita from "../images/gordita.jpg"
import santa from "../images/SantaH.jpg"

const AboutMe = () => {
    return (
        <>
            <Header clown={clown}/>
            <div className="about">
                <section className="professional">
                    <Professional />
                    <img src={baker} alt="harmony baking" />
                </section>
                <section className="baking">
                    <img src={gordita} alt="cake that looks like a cheesey gordita crunch" />
                    <p>As with my coding projects, my baking projects are a reflection of my self and my work-ethic.  I rarely question if something is possible, and instead just make it happen, whether it's a cake that looks like a cheesy gordita crunch, or miles of hand-decorated cookies.  </p>
                    <img src={foxes} alt="trays full of cookies shaped like foxes" />
                </section>
                <section className="musical">
                    <p>I've always been a performer.  Growing up in Maine it was a family tradition to dress up as clowns in local parades, and I still go back each year for the Yarmouth Clam Festival.  As an adult I have been in countless musicals, choruses, and even a barbershop quartet.</p>
                    <iframe src="https://www.youtube.com/embed/ddSUUGBrFsU" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" allowfullscreen></iframe>
                </section>
                <section className="weird">
                    <img src={weird} alt="Harmony as Weird Al" />                    
                    <p>Overall, I'm weird.<br/>But I love to work hard, play hard, and make people smile.</p>
                    <img src={santa} alt="Harmony in a santa hat" />
                </section>
            </div>
            <footer>Harmony Luise Brown 2022</footer>
        </>
    )
}

export default AboutMe