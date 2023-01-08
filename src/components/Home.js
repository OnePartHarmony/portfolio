import React, {useState} from "react"
import ContactForm from "./ContactForm"
import Header from "./Header"
import Professional from "./Professional"
import ProjectIndex from "./ProjectIndex"
import { Link } from "react-router-dom"

const Home = () => {

    const [hoverAbout, setHoverAbout] = useState(false)

    return (
        <div className="home">
            <Header />
            <div className="homeAbout">
                <Link to="/portfolio/aboutHarmony"><h2 onMouseEnter={() => {setHoverAbout(true)}} onMouseLeave={() => {setHoverAbout(false)}}>{hoverAbout ? "More About Me" : "About Me" }</h2></Link>
                <Professional />
            </div>
            <div className="homeProjects">
                <Link to="/portfolio/projects"><h2>Check Out Some of My Projects:</h2></Link>
                <div className="sectionWrap">
                    <section className="homeProjectsSection">
                        <ProjectIndex />                    
                    </section>                    
                </div>
            </div>            
            <ContactForm />
        </div>
    )
}

export default Home