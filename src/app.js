import React, {useState} from "react"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import ProjectIndex from "./components/ProjectIndex"
import ProjectShow from "./components/ProjectShow"

const App = () => {

    const [currentPage, setCurrentPage] = useState("home")
    const [projectId, setProjectId] = useState(0)

    return (
        <>
            <Navigation setCurrentPage={setCurrentPage}/>
            {currentPage === "home" && <Home />}
            {currentPage === "about" && <AboutMe />}
            {currentPage === "projectIndex" && <ProjectIndex />}
            {currentPage === "projectShow" && <ProjectShow id={projectId} setProjectId={setProjectId}/>}        
        </>
    )
}

export default App