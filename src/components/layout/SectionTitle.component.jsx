import React from 'react'

const SectionTitle = ({ sectionNumber, title }) => {
    return (
        <>
            <h2 className="section-title">{sectionNumber} <span /> {title}</h2>
        </>
    );
}
export default SectionTitle;