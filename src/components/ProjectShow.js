import React from "react"
import { useParams } from "react-router-dom"
import currentProjects from "../CurrentProjects"

const ProjectShow = () => {

    const {id} = useParams()
    const project = currentProjects[id]


    return(
        <>
            <h1>{project.title}</h1>
            <img src={project.indexImage} alt={project.title}/>
            <footer>Harmony Luise Brown 2022</footer>
        </>
    )
}

export default ProjectShow