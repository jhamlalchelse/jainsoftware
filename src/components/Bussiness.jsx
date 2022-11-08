import React, { useContext } from "react";
import "./Business.css";

const Bussiness = () => {
  return (
    <>
      <div className="busines-head mt-5">
        <img
          src="./jainsoftwareraipurlove.jpeg"
          alt="img"
          className="me-2 col-lg-5 business-left-image"
        />
        <div className="col-lg-5  ms-5 mt-4">
          <h2 className="business1-heading">
            Software to enhance your <br /> business
          </h2>
          <h6 className="business1-heading6">
            The solutions you need to succeed.
          </h6>
          <p className="business1-paragraph">
            The main thing about “Jain Software Developers” is “Flexible” and
            that’s makes us Central India’s best choice in delivering perfection
            over any business challenges. We’re the team of logical thinkers
            which consist of 70% IITians & NITians. We can code in any
            programming language, any platform that gonna suits BEST as per your
            BUSINESS and that makes us BEST IT Company.
          </p>
          <button className="business1-btn">
            GOT SOMETHING TO IMPLEMENTS ?
          </button>
        </div>
      </div>
      <hr />
      <div className="business-bottom d-flex justify-content-center align-items-center w-100">
        <button className="business-price-btn-left">₹4999</button>
        <button className="business-price-btn-right">Innovative Concept</button>
      </div>

      <div>
        <div className="business-bottom-div">
          <div className="col-lg-5 me-2 margin-small-device">
            <h1 className="business2-heading">Software Perfection</h1>
            <h5 className="business2-next">“NEXT IT REVOLUTION”</h5>
            <p className="business2-para">
              Jain Software Developers, part of Jain Software Foundation are
              helping millions of small business to become digital. Jain
              Software is running numbers of innovative graduate minds working
              on Delivering Perfection over Information Technology world. Jain
              Software assures to provide Perfection Grade Software & websites
              starting from ₹4999 for startups, small businesses & corporates.
              We do support the social causes issues and provide FREE software &
              sites development to them.
            </p>
            <button className="business1-btn px-4">Read More A</button>
          </div>
          <img
            src="/moneyImage.jpeg"
            alt="img"
            className="col-lg-5 image-width-small-d"
          />
        </div>
      </div>
    </>
  );
};

export default Bussiness;
