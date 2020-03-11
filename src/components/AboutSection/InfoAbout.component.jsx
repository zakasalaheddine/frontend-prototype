import React from 'react'
import SectionTitle from '../layout/SectionTitle.component';

const InfoAbout = () => {
    return (
        <div className="info-about">
            <SectionTitle sectionNumber="1" title="About us" />
            <h3>Let's make cities better</h3>
            <p>Upshift is like having your own car at your doorstep, but only the days you want it. Monthly plans based on how much you drive that include parking, insurance, maintenance and more.</p>
            <p>We belive in using business to drive positive change in the world and never settling for what worked in the past.</p>
            <hr/>
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src="/images/user2.png"
                    alt="Placeholderimage"
                    className="is-rounded"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p>Interested in our values ?</p>
                <p>Learn more about the company <i class="fas fa-arrow-right"></i></p>
              </div>
            </div>
        </div>
    )
}
export default InfoAbout;