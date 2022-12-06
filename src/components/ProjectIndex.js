import React from "react"
import { Link } from "react-router-dom"
import currentProjects from "../CurrentProjects"

const ProjectIndex = () => {

    const projectsJSX = currentProjects.map((project, index) => {
        return(
            <Link to={`/projects/${index}`} className="indexProject" key={index}>
                <div>
                    <img src={project.indexImage} alt={project.title}/>
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