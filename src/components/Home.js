import React, {useState} from "react"
import ContactForm from "./ContactForm"
import Header from "./Header"
import Professional from "./Professional"
import ProjectIndex from "./ProjectIndex"

const Home = (props) => {
    const {setCurrentPage, wipeProjectId} = props
    const [hoverAbout, setHoverAbout] = useState(false)

    return (
        <div className="home">
            <Header />
            <div className="homeAbout">
                <h2 onMouseEnter={() => {setHoverAbout(true)}} onMouseLeave={() => {setHoverAbout(false)}}
                    onClick={() => {
                        setCurrentPage("about")
                        wipeProjectId()
                    }}
                >{hoverAbout ? "More About Me" : "About Me" }</h2>
                <Professional />
            </div>
            <div className="homeProjects">
                <h2  onClick={() => {
                        setCurrentPage("projectIndex")
                        wipeProjectId()
                    }}>Check Out Some of My Projects:</h2>
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