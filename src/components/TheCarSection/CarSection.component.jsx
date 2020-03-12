import React from 'react'
import SectionTitle from '../layout/SectionTitle.component';

const CarSection = () => {
    return (
        <div className="section car-section">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column">
                        <SectionTitle sectionNumber="6" title="The Car" />
                        <h2 className="z-title">Always Drive an Identical Prius</h2>
                        <p className="caption">All our cars are the same so they feel familiar.</p>
                        <p className="caption">No branding so you don't sick out.</p>
                        <p className="description">
                            Fits 5 comfortably - or a surfoard, bicycle, or skiis. 54 MPG hybird gets you to Tahoe and back on a single tank. Phone mount, charging cables, and FasTrak included. Bluetooth and saftey technology like adaptive cruise control. We use all natural deodorizers and cleaning supplies.
                        </p>
                    </div>
                    <div className="column is-1"></div>
                    <div className="column images">
                        <figure className="image lead-image">
                            <img
                                src="/images/car1.png"
                                alt="Placeholderimage"
                            />
                        </figure>
                        <div className="columns">
                            <div className="column">
                                <figure className="image second-image">
                                    <img
                                        src="/images/car2.png"
                                        alt="Placeholderimage"
                                    />
                                </figure>
                            </div>
                            <div className="column">
                                <figure className="image second-image">
                                    <img
                                        src="/images/car3.png"
                                        alt="Placeholderimage"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CarSection;