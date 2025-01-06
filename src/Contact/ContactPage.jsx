import React from 'react'
import ContactForm from './ContactForm.jsx'
import './ContactIndex.css'
import generalBackground from '../assets/generalBackground.jpeg'
function ContactPage() {
    const backgroundStyle = {
        backgroundImage: `url(${generalBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    };


    return (
        <>
            <div style={backgroundStyle}>
                <h2 className="Contact-title">Contact</h2>
            </div>
            <ContactForm />
        </>
    );

}
export default ContactPage