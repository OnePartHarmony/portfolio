import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import {Route, Routes} from "react-router-dom"
import Navigation from "./components/Navigation"
import ProjectIndex from "./components/ProjectIndex"
import ProjectShow from "./components/ProjectShow"
import Personal from "./components/Personal"
import Home from "./components/Home"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/personal' element={<Personal />} />
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectIndex />} />
        <Route path='/projects/:id' element={<ProjectShow />} />
      </Routes>
    </div>
  </BrowserRouter>
)










