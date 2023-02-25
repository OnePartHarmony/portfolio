import React, {useState} from "react"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import ProjectIndex from "./components/ProjectIndex"
import ProjectShow from "./components/ProjectShow"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {

    //This changes which content is displayed, rather than having links that change the url path
    const [currentPage, setCurrentPage] = useState("home")

    //This determines which project to render in ProjectShow
    const [projectId, setProjectId] = useState(null)

    return (
        <>
            <ScrollToTop id={projectId} currentPage={currentPage}/>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} wipeProjectId={() => setProjectId(null)}/>
            {currentPage === "home" && <Home  setCurrentPage={setCurrentPage} wipeProjectId={() => setProjectId(null)} setProjectId={setProjectId}/>}
            {currentPage === "about" && <AboutMe />}
            {currentPage === "projectIndex" && <ProjectIndex setCurrentPage={setCurrentPage} setProjectId={setProjectId}/>}
            {currentPage === "projectShow" && <ProjectShow id={projectId} setProjectId={setProjectId}/>}
            <footer><br/>Harmony Luise Brown 2022</footer>
        </>
    )
}

export default App