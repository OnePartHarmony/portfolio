import React from "react"
import myFace from "../images/Harms-no-background.png"

const AboutMe = () => {
    return (
        <div className="about">
            <header>
                <section>
                    {/* <br/> */}
                    <h1>Harmony Brown</h1>
                    <h3>Software Engineer<br/>Full-Stack Developer</h3>
                </section>
                <img src={myFace} alt="Harmony's Face" className="myFace" />
            </header>                   
            {/* <section>Contact Me</section> */}
        </div>
    )
}

export default AboutMe