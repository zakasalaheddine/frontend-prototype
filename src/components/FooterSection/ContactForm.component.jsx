import React from 'react'

const ContactForm = () => {
    return (
        <div className="column contact-form">
            <h3 className="f-title">Stay in touch</h3>
            <p className="caption">Join our mailing list to get updates. We respect your privacy.</p>
            <div className="control">
                <input className="input is-large is-rounded" type="email" placeholder="Email" />
                <button className="button is-dark is-rounded"><i className="fas fa-paper-plane"></i></button>
            </div>
        </div>
    );
}
export default ContactForm;