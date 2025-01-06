import './ContactIndex.css';

function ContactForm() {
    return (
        <div className="Contact-form">
            <form>
                <h2>Contact Me</h2>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
            </form>
            <form-p>Form currently undergoing reworking. For a sure response, please contact me on any of the socials below!</form-p>
        </div>
    );
}

export default ContactForm;