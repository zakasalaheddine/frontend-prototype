import React from "react";
import SectionTitle from "../layout/SectionTitle.component";

const Service = () => {
  return (
    <div className="container section">
      <div className="columns is-vcentered">
        <div className="column is-four-fifths is-offset-1 service">
          <div className="section-image">
            <figure className="image">
              <img
                src="/images/toby-john-varhaugvik-AYXoOrc0S5o-unsplash.png"
                alt="Placeholderimage"
              />
            </figure>
          </div>
          <div className="service-infos">
            <SectionTitle sectionNumber="3" title="Service zone" />
            <h2 className="title">We've got SF covered</h2>
            <p>We provide two delivery options for any trips :</p>
            <div className="columns is-vcentered">
              <div className="column is-1">
                <i class="fas fa-check"></i>
              </div>
              <div className="column">
                <h3>Concierge service (8am - 8am daily)</h3>
                <p>
                  We deliver or pick up at your doorstep. Always have a parking
                  spot right out front, just for you.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-1">
                <i class="fas fa-check"></i>
              </div>
              <div className="column">
                <h3>Self Service (24/7)</h3>
                <p>
                  We deliver within 3 blocks and unlock it whenever you are
                  ready. Park anywhere legal in our zone, lock up, and walk away
                  to return. More flexibilty on timing, especially for starting
                  early or ending late.
                </p>
              </div>
            </div>
            <hr />
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="/images/user2.png" alt="Placeholderimage" className="is-rounded" />
                </figure>
              </div>
              <div className="media-content">
                <p className="caption">Outside of SF?</p>
                <p className="media-title">
                  Tell us where to expand <i class="fas fa-arrow-right"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
