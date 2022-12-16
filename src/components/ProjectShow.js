import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import currentProjects from "../CurrentProjects"
import { Link } from "react-router-dom"

const ProjectShow = () => {

    const {id} = useParams()
    const project = currentProjects[id]

    let projectText = project.description?.map((item, index) => {
            const oddOrEven = (index % 2 === 0) ? "evenBlurb" : "oddBlurb"
            return (
                <div key={item} className={oddOrEven} >
                    <p style={{margin:"auto"}}>{item}</p>                
                </div>
    
        )})    
    let images = project.images?.map(item => (
            <img key={item} src={item} alt={`${project.title} screenshot`}/>
        ))
    let videos = project.videos?.map(item => (
            <video key={item} muted={true} playsInline={true} controls autoPlay={true} loop={true}>
                <source src={item} type="video/mp4"/>
                Your browser does not support this video.
            </video>
        ))

    const externalLinkIcon = (
        <svg className="projectIcon" alt="opens in new tab" viewBox="0 0 96 96" width="96px" height="96px">
            <path style={{stroke:"none",fillRule:"nonzero",fillOpacity:1}} d="M 81.921875 9.960938 C 81.773438 9.964844 81.625 9.980469 81.480469 10 L 56 10 C 54.558594 9.980469 53.214844 10.738281 52.488281 11.984375 C 51.761719 13.230469 51.761719 14.769531 52.488281 16.015625 C 53.214844 17.261719 54.558594 18.019531 56 18 L 72.34375 18 L 45.171875 45.171875 C 44.125 46.175781 43.707031 47.664062 44.070312 49.066406 C 44.4375 50.46875 45.53125 51.5625 46.933594 51.929688 C 48.335938 52.292969 49.824219 51.875 50.828125 50.828125 L 78 23.65625 L 78 40 C 77.980469 41.441406 78.738281 42.785156 79.984375 43.511719 C 81.230469 44.238281 82.769531 44.238281 84.015625 43.511719 C 85.261719 42.785156 86.019531 41.441406 86 40 L 86 14.492188 C 86.15625 13.328125 85.792969 12.15625 85.007812 11.285156 C 84.222656 10.410156 83.09375 9.925781 81.921875 9.960938 Z M 25 16 C 16.765625 16 10 22.765625 10 31 L 10 71 C 10 79.234375 16.765625 86 25 86 L 65 86 C 73.234375 86 80 79.234375 80 71 L 80 52 C 80.019531 50.558594 79.261719 49.214844 78.015625 48.488281 C 76.769531 47.761719 75.230469 47.761719 73.984375 48.488281 C 72.738281 49.214844 71.980469 50.558594 72 52 L 72 71 C 72 74.894531 68.894531 78 65 78 L 25 78 C 21.105469 78 18 74.894531 18 71 L 18 31 C 18 27.105469 21.105469 24 25 24 L 44 24 C 45.441406 24.019531 46.785156 23.261719 47.511719 22.015625 C 48.238281 20.769531 48.238281 19.230469 47.511719 17.984375 C 46.785156 16.738281 45.441406 15.980469 44 16 Z M 25 16 "/>
        </svg>
    )

    return(
        <>
            <p className="projectShowTitle">{project.title}</p>
            <p className="projectShowSubtitle">{project.subTitle}</p>
            <section className="projectLinks">
                {project.deployedLink && 
                    <a className="projectLink" target="_blank" rel="noreferrer" href={project.deployedLink}>
                        Project Site
                        {externalLinkIcon}
                    </a>
                }
                {project.gitHubLink &&
                    <a className="projectLink" target="_blank" rel="noreferrer" href={project.gitHubLink}>
                        Project Repo
                        {externalLinkIcon}
                    </a>                
                }
                {project.frontEndLink &&
                    <>
                        <a className="projectLink" target="_blank" rel="noreferrer" href={project.frontEndLink}>
                            Front-End Repo
                            {externalLinkIcon}
                        </a>
                        <a className="projectLink" target="_blank" rel="noreferrer" href={project.backEndLink}>
                            Back-End Repo
                            {externalLinkIcon}
                        </a>                    
                    </>              
                }
            </section>            
            <hr/>
            <div className="projectShow">
                <section className="projectLeft">
                    {projectText}
                </section>
                <section className="projectImages">
                    <img src={project.indexImage} alt={project.title}/>                    
                    {images}
                    {videos}
                </section>
            </div>
            <div className="projectNav">
                {(id > 0) && <Link className="projectNavLink" to={`/portfolio/projects/${parseInt(id) - 1}`} >{"\u2b05"} Previous Project</Link>}
                {(id < currentProjects.length - 1) && <Link className="projectNavLink" to={`/portfolio/projects/${parseInt(id) + 1}`} >Next project {"\u2b95"}</Link>}
            </div>
        </>
    )
}

export default ProjectShow