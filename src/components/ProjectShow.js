import React from "react"
import { useParams } from "react-router-dom"
import currentProjects from "../CurrentProjects"

const ProjectShow = () => {

    const {id} = useParams()
    const project = currentProjects[id]


    const projectText = project.description.map((item, index) => (
        <>
            <p key={index}>{item}</p><br/>
        </>
    ))

    const videos = project.videos.map((item,index) => (
        <video key={index} muted="true" playsInline="true" controls autoplay="true" loop="true">
            <source src={item} type="video/mp4"/>
            Your browser does not support this video.
        </video>
    ))

    return(
        <>
            <h1 style={{fontSize: "4vw", width: "max-content", margin: "2vw auto 1vw auto"}}>{project.title}</h1>
            <h3 style={{fontSize: "3vw", width: "max-content", margin: "0 auto 2vw auto"}}>{project.subTitle}</h3>
            <hr style={{width: "70vw", margin: "0 auto 2vw auto", borderBottom: "2px solid #fefae0",}}/>
            <div className="projectShow">
                <section className="projectLeft">
                    {projectText}
                </section>
                <section className="projectImages">
                    <img src={project.indexImage} alt={project.title}/>
                    {videos}
                </section>
            </div>
        </>
    )
}

export default ProjectShow