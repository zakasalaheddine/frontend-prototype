import React from "react";

const PricingElement = ({ element }) => {
  return (
    <div className="column package">
      <div className={`card ${element.isRecommanded && 'is-recommanded'}`}>
        <div className="card-content">
            {
                element.isRecommanded && (<p className="recommanded">Recommanded</p>)
            }
          <h3 className="package-title">{element.title}</h3>
          <p className="package-subtitle">{element.subtitle}</p>
          <p className="package-subtitle">
            <span className="price">{`$${element.price}`}</span> /month
          </p>
          <hr />
          <p className="description">{element.description}</p>
          <button className="button is-rounded">{`Start with ${element.title}`}</button>
          <br/>
          <a href="#details" className="detail-link">
            View plan details <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default PricingElement;
