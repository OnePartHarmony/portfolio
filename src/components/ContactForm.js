import React, { useRef, useState } from "react"
import emailjs from 'emailjs-com'

const ContactForm = () => {
    const [sent, setSent] = useState(false)
    const [fail, setFail] = useState(false)
    const form = useRef()



    const sendMessage = (e) => {
        e.preventDefault()
        emailjs.sendForm(process.env.REACT_APP_EMAIL_KEY, "messageTemplate_o9eemqx", form.current, "etMM2HVe5T0D1UaEI")
        .then((result) => {
            if (result.text === "OK") {
                setSent(true)
            } else {
                setFail(true)
            }            
            console.log(result.text)
        }, (error) => {
            setFail(true)
            console.log(error.text)
        })
    }

    const failMessage = (<div className="emailResponse"><p>Something went wrong.<br/>Please email me at<br/>harmonyluisebrown@gmail.com</p></div>)

    const sentMessage = (<div className="emailResponse"><p>Thanks for the Email!<br/>I'm so happy to hear from you.</p></div>)

    const fullForm = (
        <form ref={form} onSubmit={sendMessage}>
            <h2>Contact Me {"\u2794"}<span> harmonyluisebrown@gmail.com</span></h2>
            <section className="inputs">
                <div>
                    <label htmlFor="user_name">Name:</label><br/>
                    <input type="text" name="user_name" id="user_name" placeholder="your full name"/><br/>
                    <label htmlFor="address" className="emailLabel">Email Address:</label><br/>
                    <input type="text" name="address" id="address" placeholder="your email address"/><br/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label><br/>
                    <textarea name="message" id="message" placeholder="what would you like to tell me?"/><br/>
                    <button type="submit" className="float-end">Send</button>    
                </div>
            </section>
        </form>
    )  

    return (
        <div className="contactForm">
            {(sent || fail) ? (sent ? sentMessage : failMessage) : fullForm}
        </div>
    )
}

export default ContactForm