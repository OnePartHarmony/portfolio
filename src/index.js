import React from "react"
import ReactDOM from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import App from "./app"

// Leaving some commented-out code from when each page was a different path
// In case I deploy somewhere other than github and want to change back easily

// import {BrowserRouter, Navigate} from "react-router-dom"
// import {Route, Routes} from "react-router-dom"
// import Navigation from "./components/Navigation"
// import ProjectIndex from "./components/ProjectIndex"
// import ProjectShow from "./components/ProjectShow"
// import Home from "./components/Home"
// import AboutMe from "./components/AboutMe"
// import ScrollToTop from "./components/ScrollToTop"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <BrowserRouter>
  //   {/* <ScrollToTop /> */}
  //   <div className="App">
  //     {/* <Navigation /> */}
  //     <Routes>
  //       {/* Because this is deployed at https://onepartharmony.github.io/portfolio/ and I hadn't realized that "/" takes the "/portfolio" off of that path vs starting there */}
  //       <Route path='/' element={<Navigate to='/portfolio' replace />} />
  //       {/* <Route path='/portfolio/aboutHarmony' element={<AboutMe />} /> */}
  //       <Route path='/portfolio' element={<App />} />
  //       {/* <Route path='/portfolio/projects' element={<ProjectIndex />} />
  //       <Route path='/portfolio/projects/:id' element={<ProjectShow />} /> */}
  //     </Routes>
  //   </div>
  // </BrowserRouter>

  <App />
)










