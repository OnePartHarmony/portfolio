import React from "react"
import { useParams } from "react-router-dom"
import currentProjects from "../CurrentProjects"

const ProjectShow = (props) => {

    const {id} = useParams()
    const project = currentProjects[id]


    return(
        <>
            <h1>{project.title}</h1>
            <img src={project.indexImage} alt={project.title}/>
        </>
    )
}

export default ProjectShow