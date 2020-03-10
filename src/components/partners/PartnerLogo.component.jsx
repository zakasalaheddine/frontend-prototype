import React from "react";

const PartnerLogo = ({ image }) => {
  return (
    <div className="column">
      <figure className="image is-128x128">
        <img src={image} alt="" />
      </figure>
    </div>
  );
};
export default PartnerLogo;
