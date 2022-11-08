import React from "react";
import "./Ourclient.css";

const Ourclient = () => {
  return (
    <>
      <div className="ourclientbg text-center">
        <h1 className="text-white fw-bold ourclient-heading">
          Our Awesome Clients
        </h1>
        <h6
          className="text-white ourclient-sub-heading"
          
        >
          Software Company headquarted in Raipur proud to have loyal Clients
          like them 🙂
        </h6>
        <div className="ourclient-logo-name">
          <img
            src="./microsoft-jainsoftware.png"
            alt="microsoft logo"
            className="micro-logo"
          />
          <img
            src="./avast-jainsoftware.png"
            alt="microsoft logo"
            className="avast-logo"
          />
          <img
            src="./ibm-jainsoftware.png"
            alt="ibm logo"
            className="ibm-logo"
          />
        </div>
      </div>
    </>
  );
};

export default Ourclient;
