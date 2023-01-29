import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
// import { NavLink } from "react-router-dom"

const Navigation = (props) => {
    const {setCurrentPage} = props

    return (
        <Navbar collapseOnSelect={true} className="navigation" expand="sm">            
            <Navbar.Brand href="/portfolio" className="ms-3 brand">HB</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className='me-3'/>
            <Navbar.Collapse className="ms-4" style={{fontSize: "100px"}}>
                <Nav className="ms-2">                    
                    <a className="linkedIn me-4" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/harmony-l-brown/">
                        <svg alt="open link to linkedin in new tab" style={{height: "100%"}} viewBox="0 0 128 128">
                            <path className="svgHover" fill="#fefae0" d="M.85 52.73h4.94v17.98h9.14v4.56H.85V52.73zM17.11 60h4.74v15.26h-4.74zm2.37-7.59a2.75 2.75 0 11-2.75 2.75 2.75 2.75 0 012.75-2.75M41.69 52.73h4.74V66.2l5.38-6.22h5.81l-6.22 7.07 6.09 8.22h-5.96l-5.04-7.55h-.06v7.55h-4.74V52.73zM24.48 60H29v2.09h.06a5 5 0 014.49-2.47c4.81 0 5.69 3.16 5.69 7.27v8.38h-4.7v-7.43c0-1.77 0-4-2.47-4s-2.85 1.93-2.85 3.92v7.55h-4.74z"></path><path className="svgHover" fill="#fefae0" d="M67.61 65.85a2.84 2.84 0 00-2.91-2.91 3.16 3.16 0 00-3.35 2.91zm4 6.77a8.35 8.35 0 01-6.48 3c-4.74 0-8.54-3.16-8.54-8.07s3.8-8.06 8.54-8.06c4.43 0 7.21 3.16 7.21 8.06v1.49h-11a3.54 3.54 0 003.57 3 4 4 0 003.38-1.87zM82.23 63.68A3.89 3.89 0 1086 67.57a3.6 3.6 0 00-3.8-3.89m8.2 11.58H86v-2a6 6 0 01-4.71 2.4c-4.56 0-7.56-3.29-7.56-7.94 0-4.27 2.66-8.19 7-8.19a5.73 5.73 0 014.87 2h.06v-8.8h4.74z"></path><path className="svgHover" fill="#bc6c25" d="M124.78 48H97.51a2.34 2.34 0 00-2.36 2.31v27.38A2.34 2.34 0 0097.51 80h27.27a2.34 2.34 0 002.37-2.31V50.31a2.34 2.34 0 00-2.37-2.31z"></path><path className="svgHoverLt" fill="#291512" d="M99.89 60h4.75v15.27h-4.75zm2.37-7.59a2.75 2.75 0 11-2.75 2.75 2.75 2.75 0 012.75-2.75M107.61 60h4.55v2.09h.06a5 5 0 014.49-2.47c4.81 0 5.69 3.16 5.69 7.27v8.38h-4.74v-7.43c0-1.77 0-4-2.47-4s-2.85 1.93-2.85 3.92v7.55h-4.74z"></path>
                        </svg>
                    </a>
                    <a className="gitIcon" target="_blank" rel="noreferrer" href="https://github.com/OnePartHarmony">
                        <svg alt="open link to github in new tab" style={{height: "100%"}} viewBox="0 0 128 128">
                            <g className="svgHover" fill="#bc6c25"><path fillRule="evenodd" clipRule="evenodd" d="M64 1.512c-23.493 0-42.545 19.047-42.545 42.545 0 18.797 12.19 34.745 29.095 40.37 2.126.394 2.907-.923 2.907-2.047 0-1.014-.04-4.366-.058-7.92-11.837 2.573-14.334-5.02-14.334-5.02-1.935-4.918-4.724-6.226-4.724-6.226-3.86-2.64.29-2.586.29-2.586 4.273.3 6.523 4.385 6.523 4.385 3.794 6.504 9.953 4.623 12.38 3.536.383-2.75 1.485-4.628 2.702-5.69-9.45-1.075-19.384-4.724-19.384-21.026 0-4.645 1.662-8.44 4.384-11.42-.442-1.072-1.898-5.4.412-11.26 0 0 3.572-1.142 11.7 4.363 3.395-.943 7.035-1.416 10.65-1.432 3.616.017 7.258.49 10.658 1.432 8.12-5.504 11.688-4.362 11.688-4.362 2.316 5.86.86 10.187.418 11.26 2.728 2.978 4.378 6.774 4.378 11.42 0 16.34-9.953 19.938-19.427 20.99 1.526 1.32 2.886 3.91 2.886 7.88 0 5.692-.048 10.273-.048 11.674 0 1.13.766 2.458 2.922 2.04 16.896-5.632 29.07-21.574 29.07-40.365C106.545 20.56 87.497 1.512 64 1.512z"></path><path d="M37.57 62.596c-.095.212-.428.275-.73.13-.31-.14-.482-.427-.382-.64.09-.216.424-.277.733-.132.31.14.486.43.38.642zM39.293 64.52c-.203.187-.6.1-.87-.198-.278-.297-.33-.694-.124-.884.208-.188.593-.1.87.197.28.3.335.693.123.884zm1.677 2.448c-.26.182-.687.012-.95-.367-.262-.377-.262-.83.005-1.013.264-.182.684-.018.95.357.262.385.262.84-.005 1.024zm2.298 2.368c-.233.257-.73.188-1.093-.163-.372-.343-.475-.83-.242-1.087.237-.257.736-.185 1.102.163.37.342.482.83.233 1.086zm3.172 1.374c-.104.334-.582.485-1.064.344-.482-.146-.796-.536-.7-.872.1-.336.582-.493 1.067-.342.48.144.795.53.696.87zm3.48.255c.013.35-.396.642-.902.648-.508.012-.92-.272-.926-.618 0-.354.4-.642.908-.65.506-.01.92.272.92.62zm3.24-.551c.06.342-.29.694-.793.787-.494.092-.95-.12-1.014-.46-.06-.35.297-.7.79-.792.503-.088.953.118 1.017.466zm0 0"></path></g><path className="svgHover" d="M24.855 108.302h-10.7a.5.5 0 00-.5.5v5.232a.5.5 0 00.5.5h4.173v6.5s-.937.32-3.53.32c-3.056 0-7.327-1.116-7.327-10.508 0-9.393 4.448-10.63 8.624-10.63 3.614 0 5.17.636 6.162.943.31.094.6-.216.6-.492l1.193-5.055a.468.468 0 00-.192-.39c-.403-.288-2.857-1.66-9.058-1.66-7.144 0-14.472 3.038-14.472 17.65 0 14.61 8.39 16.787 15.46 16.787 5.854 0 9.405-2.502 9.405-2.502.146-.08.162-.285.162-.38v-16.316a.5.5 0 00-.5-.5zM79.506 94.81H73.48a.5.5 0 00-.498.503l.002 11.644h-9.392V95.313a.5.5 0 00-.497-.503H57.07a.5.5 0 00-.498.503v31.53c0 .277.224.503.498.503h6.025a.5.5 0 00.497-.504v-13.486h9.392l-.016 13.486c0 .278.224.504.5.504h6.038a.5.5 0 00.497-.504v-31.53a.497.497 0 00-.497-.502zm-47.166.717c-2.144 0-3.884 1.753-3.884 3.923 0 2.167 1.74 3.925 3.884 3.925 2.146 0 3.885-1.758 3.885-3.925 0-2.17-1.74-3.923-3.885-3.923zm2.956 9.608H29.29c-.276 0-.522.284-.522.56v20.852c0 .613.382.795.876.795h5.41c.595 0 .74-.292.74-.805v-20.899a.5.5 0 00-.498-.502zm67.606.047h-5.98a.5.5 0 00-.496.504v15.46s-1.52 1.11-3.675 1.11-2.727-.977-2.727-3.088v-13.482a.5.5 0 00-.497-.504h-6.068a.502.502 0 00-.498.504v14.502c0 6.27 3.495 7.804 8.302 7.804 3.944 0 7.124-2.18 7.124-2.18s.15 1.15.22 1.285c.07.136.247.273.44.273l3.86-.017a.502.502 0 00.5-.504l-.003-21.166a.504.504 0 00-.5-.502zm16.342-.708c-3.396 0-5.706 1.515-5.706 1.515V95.312a.5.5 0 00-.497-.503H107a.5.5 0 00-.5.503v31.53a.5.5 0 00.5.503h4.192c.19 0 .332-.097.437-.268.103-.17.254-1.454.254-1.454s2.47 2.34 7.148 2.34c5.49 0 8.64-2.784 8.64-12.502s-5.03-10.988-8.428-10.988zm-2.36 17.764c-2.073-.063-3.48-1.004-3.48-1.004v-9.985s1.388-.85 3.09-1.004c2.153-.193 4.228.458 4.228 5.594 0 5.417-.935 6.486-3.837 6.398zm-63.689-.118c-.263 0-.937.107-1.63.107-2.22 0-2.973-1.032-2.973-2.368v-8.866h4.52a.5.5 0 00.5-.504v-4.856a.5.5 0 00-.5-.502h-4.52l-.007-5.97c0-.227-.116-.34-.378-.34h-6.16c-.238 0-.367.106-.367.335v6.17s-3.087.745-3.295.805a.5.5 0 00-.36.48v3.877a.5.5 0 00.497.503h3.158v9.328c0 6.93 4.86 7.61 8.14 7.61 1.497 0 3.29-.48 3.586-.59.18-.067.283-.252.283-.453l.004-4.265a.51.51 0 00-.5-.502z" fill="#fefae0"></path>
                         </svg>
                    </a>
                </Nav>              
                <Nav className="ms-auto">
                    {/* <Nav.Link eventKey="1" as={NavLink} to="/portfolio/projects" className="me-3 navLink">Projects</Nav.Link>
                    <Nav.Link eventKey="2" as={NavLink} to="/portfolio/aboutHarmony" className="me-3 navLink">Who?</Nav.Link> */}

                    <Nav.Link className="me-3 navLink" onClick={() => setCurrentPage("projectIndex")}>Projects</Nav.Link>
                    <Nav.Link className="me-3 navLink" onClick={() => setCurrentPage("about")}>Who?</Nav.Link>

                    <Nav.Link onClick={() => {window.open("/portfolio/hbResume.pdf", "_blank")}}  className="me-3 navLink" download>Resume
                        <svg className="resumeIcon" alt="opens in new tab" viewBox="0 0 96 96" width="96px" height="96px">
                            <path style={{stroke:"none",fillRule:"nonzero",fillOpacity:1}} d="M 81.921875 9.960938 C 81.773438 9.964844 81.625 9.980469 81.480469 10 L 56 10 C 54.558594 9.980469 53.214844 10.738281 52.488281 11.984375 C 51.761719 13.230469 51.761719 14.769531 52.488281 16.015625 C 53.214844 17.261719 54.558594 18.019531 56 18 L 72.34375 18 L 45.171875 45.171875 C 44.125 46.175781 43.707031 47.664062 44.070312 49.066406 C 44.4375 50.46875 45.53125 51.5625 46.933594 51.929688 C 48.335938 52.292969 49.824219 51.875 50.828125 50.828125 L 78 23.65625 L 78 40 C 77.980469 41.441406 78.738281 42.785156 79.984375 43.511719 C 81.230469 44.238281 82.769531 44.238281 84.015625 43.511719 C 85.261719 42.785156 86.019531 41.441406 86 40 L 86 14.492188 C 86.15625 13.328125 85.792969 12.15625 85.007812 11.285156 C 84.222656 10.410156 83.09375 9.925781 81.921875 9.960938 Z M 25 16 C 16.765625 16 10 22.765625 10 31 L 10 71 C 10 79.234375 16.765625 86 25 86 L 65 86 C 73.234375 86 80 79.234375 80 71 L 80 52 C 80.019531 50.558594 79.261719 49.214844 78.015625 48.488281 C 76.769531 47.761719 75.230469 47.761719 73.984375 48.488281 C 72.738281 49.214844 71.980469 50.558594 72 52 L 72 71 C 72 74.894531 68.894531 78 65 78 L 25 78 C 21.105469 78 18 74.894531 18 71 L 18 31 C 18 27.105469 21.105469 24 25 24 L 44 24 C 45.441406 24.019531 46.785156 23.261719 47.511719 22.015625 C 48.238281 20.769531 48.238281 19.230469 47.511719 17.984375 C 46.785156 16.738281 45.441406 15.980469 44 16 Z M 25 16 "/>
                        </svg>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>            
      </Navbar>
    )
}

export default Navigation