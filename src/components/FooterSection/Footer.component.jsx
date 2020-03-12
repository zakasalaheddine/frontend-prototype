import React from 'react'
import Links from './Links.component';
import ContactForm from './ContactForm.component';

const Footer = () => {
    const elements = [
        {
            title: "Product",
            links: [
                "Personal", "Business", "Pricing", "Log In"
            ]
        },
        {
            title: "Company",
            links: [
                "About", "Blog", "Careers", "Contact us"
            ]
        },
        {
            title: "Help Center",
            links: [
                "FAQ", "Insurence", "Agreement",
            ]
        },
    ]
    return (
        <footer className="container section is-vcentered footer">
            <div className="columns">
                {elements.map((el, idx) => <Links key={idx} title={el.title} links={el.links} />)}
                <ContactForm />
            </div>
            <div className="columns is-vcentered legent">
                <div className="column">
                    <figure className="image">
                        <img src="/images/logo.png" alt="Placeholderimage" className="is-rounded" />
                    </figure>
                </div>
                <div className="column">Copyright 2019 Upshift, Inc.</div>
                <div className="column">
                    <a href="#facebook" className="button is-dark is-rounded facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#twitter" className="button is-dark is-rounded twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#yelp" className="button is-dark is-rounded yelp"><i class="fab fa-yelp"></i></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;