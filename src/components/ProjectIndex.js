import React from "react"
import { Link } from "react-router-dom"
import currentProjects from "../CurrentProjects"

const ProjectIndex = () => {

    const projectsJSX = currentProjects.map((project, index) => {
        return(
            <Link to={`/portfolio/projects/${index}`} className="indexProject" key={index}>
                    <img src={project.indexImage} alt={project.title}/>
                <div className="cover">
                    <section className="projectTitles">
                        <h1>{project.title}</h1>
                        <h3>{project.subTitle}</h3>                        
                    </section>
                </div>
            </Link>
        )        
    })

    return (
        <>
            <div className="projectIndexContainer">
                {projectsJSX}
            </div>
        </>
    )
}


export default ProjectIndex