import React from "react";
import PartnerLogo from "./PartnerLogo.component";

const Partners = () => {
  const partners = [
    "/images/business_insider_logo-1.png",
    "/images/wired-logo-transparent.png",
    "/images/Logo-URBAN-X.png",
    "/images/logo_3.png",
    "/images/50-502860_curbed-logo-california-curbed-logo-black.png",
  ];
  return (
    <div className="container">
      <div className="columns">
        {partners.map(partner => (
          <PartnerLogo image={partner} />
        ))}
      </div>
    </div>
  );
};
export default Partners;
