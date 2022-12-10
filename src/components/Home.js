import React from "react"
import ContactForm from "./ContactForm"
import Header from "./Header"

const Home = () => {
    return (
        <div className="home">
            <Header />
            <ContactForm />
            {/* <section>Contact Me</section> */}
        </div>
    )
}

export default Home