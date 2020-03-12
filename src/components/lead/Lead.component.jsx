import React from "react";
import PhoneForm from "./PhoneForm.component";

const Lead = () => {
  return (
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column header">
          <h1 className="lead">Just drive.</h1>
          <h1 className="lead">We'll do the rest.</h1>
          <p className="accent">
            All-inclusive, usage-based car subscriptions.
          </p>
          <PhoneForm />
        </div>
        <div className="column">
          <figure className="image">
            <img src="/images/19280.jpg" alt="LeadImage" />
          </figure>
        </div>
      </div>
    </div>
  );
};
export default Lead;
