import React from 'react'

const Links = ({ title, links }) => {
    return (
        <div className="column footer-links">
            <h3 className="f-title">{title}</h3>
            <ul className="links">
                {
                    links.map((link, idx) => <li key={idx} className="link"><a href="#footer"> {link} </a></li>)
                }

            </ul>
        </div>
    );
}
export default Links;