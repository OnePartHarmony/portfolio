import React from "react"
import myFace from "../images/Harms-no-background.png"

const Header = () => {

    return (
        <header>
            <section>
                <h1>Harmony Brown</h1>
                <h3>Software Engineer<br/>Full-Stack Developer</h3>
            </section>
            <img src={myFace} alt="Harmony's Face" className="myFace" />
        </header>       
    )
}

export default Header