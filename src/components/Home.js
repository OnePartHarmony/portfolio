import React from "react"
import ContactForm from "./ContactForm"
import Header from "./Header"
import Professional from "./Professional"
import ProjectIndex from "./ProjectIndex"

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="homeAbout">
                <h2>About Me</h2>
                <Professional />
            </div>
            <div className="homeProjects">
                <h2>Check Out Some of My Projects:</h2>
                <div className="sectionWrap">
                    <section>
                        <ProjectIndex />                    
                    </section>                    
                </div>
            </div>            
            <ContactForm />
            <footer>Harmony Luise Brown 2022</footer>
        </div>
    )
}

export default Home