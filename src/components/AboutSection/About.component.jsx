import React from "react";
import ReviewCard from "./ReviewCard.component";
import InfoAbout from "./InfoAbout.component";

const About = () => {
  const review = {
    image: "/images/tarutoa-oRt5GPA3x2U-unsplash.png",
    review:
      "Since becoming a monthly subscriber, I feel like I have my car back again. It's like I own a car without the worries or cost of keeping it around all the time",
    userImage: "/images/brooks-leibee-27QcqVqgVg4-unsplash.png",
    username: "SAM R.",
    reviewsCount: 28
  };
  return (
    <div className="container about">
      <div className="columns">
        <div className="column">
          <ReviewCard review={review} />
        </div>
        <div className="column">
          <InfoAbout />
        </div>
      </div>
    </div>
  );
};
export default About;
