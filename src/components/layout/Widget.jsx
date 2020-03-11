import React from 'react'

const Widget = ({ header, p1, p2, image, caption, title }) => {
    return (
        <div className="widget">
            {header && (<h3>{header}</h3>)}
            {p1 && (<p>{p1}</p>)}
            {p2 && (<p>{p2}</p>)}
            <hr />
            {
                image && (
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img
                                    src={image}
                                    alt="Placeholderimage"
                                    className="is-rounded"
                                />
                            </figure>
                        </div>
                        <div className="media-content">
                            {caption && (<p className="caption">{caption}</p>)}
                            {title && (<p className="widget-title">{title}<i class="fas fa-arrow-right"></i></p>)}
                        </div>
                    </div>
                )
            }

        </div>
    );
}
export default Widget;