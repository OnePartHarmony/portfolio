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
                <label htmlFor="user_name">Name:</label>
                <input type="text" name="user_name" id="user_name" placeholder="your full name"/><br/>
                <label htmlFor="address">Email:</label>
                <input type="text" name="address" id="address" placeholder="your email address"/><br/>
                <label htmlFor="message">message</label>
                <textarea rows="4" name="message" id="message" placeholder="what would you like to tell me?"/><br/>
                <button type="submit">Send Email</button>
            </form>
        </div>
    )
}

export default ContactForm