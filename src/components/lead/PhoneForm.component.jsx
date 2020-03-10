import React from "react";

const PhoneForm = () => {
  return (
    <form className="phone-form columns">
      <div className="column">
        <div className="field">
          <input className="input" type="text" placeholder="Phone number..." />
        </div>
      </div>
      <div className="column">
        <button className="button">Get started</button>
      </div>
    </form>
  );
};
export default PhoneForm;
