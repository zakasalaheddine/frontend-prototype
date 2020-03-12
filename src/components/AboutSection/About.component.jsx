import React from "react";
import ReviewCard from "./ReviewCard.component";
import SectionTitle from "../layout/SectionTitle.component";
import Widget from "../layout/Widget";

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
      <div className="columns is-vcentered">
        <div className="column">
          <ReviewCard review={review} />
        </div>
        <div className="column is-1"></div>
        <div className="column">
          <div className="info-about">
            <SectionTitle sectionNumber="1" title="About us" />
            <Widget
              header="Let's make cities better"
              p1="Upshift is like having your own car at your doorstep, but only the days you want it. Monthly plans based on how much you drive that include parking, insurance, maintenance and more."
              p2="We belive in using business to drive positive change in the world and never settling for what worked in the past."
              image="/images/user2.png"
              title="Learn more about the company"
              caption="Interested in our values ?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
