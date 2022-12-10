import React, { useRef } from "react"
import emailjs from 'emailjs-com'

const ContactForm = () => {

    // const [email, setEmail] = useState({
    //     user_name: "",
    //     address: "",
    //     message: ""
    // })

    // const handleChange = (e) => {
    //     setEmail(prevEmail => {return {...prevEmail, [e.target.name]: e.target.value}})
    // }

    const form = useRef()

    const sendMessage = (e) => {
        e.preventDefault()
        emailjs.sendForm("service_ene7nkl", "messageTemplate_o9eemqx", form.current, "etMM2HVe5T0D1UaEI")
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }

    return (
        <div className="contactForm">
            {/* <h3>Email Me!</h3>
            <label htmlFor="name">Name:</label>
            <input type="text" onChange={handleChange} id="name" name="user_name" placeholder="your full name" value={email.user_name} />
            <br/>
            <label htmlFor="address">Email Address:</label>
            <input type="email" onChange={handleChange} id="address" name="address" placeholder="your email address" value={email.address} />
            <br/>
            <label htmlFor="message">Message:</label>
            <textarea rows="4" onChange={handleChange} id="message" name="message" placeholder="what would you like to tell me?" value={email.message} />
            <br/>
            <button onClick={sendMessage}>Submit</button> */}
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