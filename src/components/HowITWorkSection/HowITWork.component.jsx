import React from "react";
import SectionTitle from "../layout/SectionTitle.component";
import Widget from "../layout/Widget";

const HowITWork = () => {
  const steps = [
    {
      image: "/images/user2.png",
      header: "Text us",
      text:
        "Text when you want your car. No app needed, just an online account. Real human operators"
    },
    {
      image: "/images/user2.png",
      header: "We deliver",
      text: "Your car will arrive at your door - clean and fully fueled."
    },
    {
      image: "/images/user2.png",
      header: "You drive",
      text:
        "Hop in and go with full coverage insurance, FasTrack, phone accessories, and unlimited mileage."
    },
    {
      image: "/images/user2.png",
      header: "We pick it up",
      text:
        "It's yours for few hours or few days. Return on your own time, anywhere in our zone. We'll gas and clean it."
    }
  ];
  return (
    <div className="how-it-work container ">
      <div className="columns section">
        <div className="column">
          <SectionTitle title="HOW IT WORK" sectionNumber="2" />
          <h2 className="z-title">Simple and handy rental process</h2>
        </div>
        <div className="column is-1"></div>
        <div className="column">
          <Widget
            p1="Snow chains, surf board rack, key lock box, or dog car seat hammock available upon request"
            image="/images/user2.png"
            title="Check the available accessories"
          />
        </div>
        <div className="column">
          <Widget
            p1="Still got questions? We've probably covered them all in the Help Center."
            image="/images/user2.png"
            title="Read our FAQ"
          />
        </div>
      </div>
      <div className="columns section">
        {steps.map((step, idx) => (
          <div className="column" key={idx}>
            <figure className="image is-128x128 ">
              <img
                src={step.image}
                alt="Placeholderimage"
                className="is-rounded"
              />
            </figure>
            <Widget header={step.header} p1={step.text} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default HowITWork;
