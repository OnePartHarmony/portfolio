import { useEffect } from "react"
// import { useLocation } from "react-router-dom"


// This version was for when each page used a separate path.
// Saving as a comment in case I deploy somewhere that that method makes sense again
// const ScrollToTop = () => {
//   const { pathname } = useLocation()

//   useEffect(() => {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "instant",
//       })
//   }, [pathname])

//   return null
// }

const ScrollToTop = (props) => {
  const { id, currentPage } = props

  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      })
  }, [id, currentPage])

  return null
}

export default ScrollToTop