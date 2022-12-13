import React, { useRef } from "react"
import emailjs from 'emailjs-com'

const ContactForm = () => {

    const form = useRef()

    const sendMessage = (e) => {
        e.preventDefault()
        emailjs.sendForm(process.env.REACT_APP_EMAIL_KEY, "messageTemplate_o9eemqx", form.current, "etMM2HVe5T0D1UaEI")
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }

    return (
        <div className="contactForm">            
            <form ref={form} onSubmit={sendMessage}>
                <h2>Contact Me -><span> harmonyluisebrown@gmail.com</span></h2>
                <section className="inputs">
                    <div>
                        <label htmlFor="user_name" className="me-3">Name:</label><br/>
                        <input type="text" name="user_name" id="user_name" placeholder="your full name"/><br/>
                        <label htmlFor="address" className="mt-3 me-3">Email Address:</label><br/>
                        <input type="text" name="address" id="address" placeholder="your email address"/><br/>
                    </div>
                    <div>
                        <label htmlFor="message" className="me-3">Message:</label><br/>
                        <textarea name="message" id="message" placeholder="what would you like to tell me?"/><br/>
                        <button type="submit" className="float-end mt-3">Send</button>    
                    </div>
                </section>

            
            </form>
        </div>
    )
}

export default ContactForm