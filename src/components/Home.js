import React from "react"
import ContactForm from "./ContactForm"
import Header from "./Header"
import ProjectIndex from "./ProjectIndex"

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="homeProjects">
                <h2>Check Out Some of My Projects:</h2>
                <div className="sectionWrap">
                    <section>
                        <ProjectIndex />                    
                    </section>                    
                </div>
            </div>            
            <ContactForm />
            <footer>&copy;2022 Harmony Luise Brown</footer>
        </div>
    )
}

export default Home