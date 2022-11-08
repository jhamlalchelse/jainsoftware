import React from 'react'
import './Service.css'
import { GiCommercialAirplane } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";

const Service = () => {
  return (
    <>
      <div className="container d-lg-flex service-div">
        <div className="text-center">
          <div className="border-radius-div">
            <GiCommercialAirplane className="service-logo" />
          </div>
          <h5 className="service-heading">Software Development Science? </h5>
          <p className="service-para">
            Jain Software develop customized software for users as per the
            requirements.
          </p>
        </div>
        <div className="text-center">
          <div
            className="border-radius-div"
            style={{ border: "2px solid rgb(143, 27, 114)" }}
          >
            <MdShoppingCart
              className="service-logo"
              style={{ color: "rgb(143, 27, 114)" }}
            />
          </div>
          <h5 className="service-heading">Ecommerce. Done Right ! </h5>
          <p className="service-para">
            We have developed some worlds best ecommerce sites on highly
            optimized enterprise platform.
          </p>
        </div>
        <div className="text-center">
          <div
            className="border-radius-div"
            style={{ border: "2px solid orange" }}
          >
            <GiCoffeeCup className="service-logo" style={{ color: "orange" }} />
          </div>
          <h5 className="service-heading">iPhone/Android App Development ?</h5>
          <p className="service-para">
            Our Android/IOS App Development team is there to make an app as per
            your requirements.
          </p>
        </div>
        <div className="text-center">
          <div className="border-radius-div border-success">
            <IoRocketSharp className="service-logo text-success" />
          </div>
          <h5 className="service-heading">
            React + CSS4 on Dream Website Development ?{" "}
          </h5>
          <p className="service-para">
            Your dream, our work! We will provide you websites or applications
            with best creative designing.
          </p>
        </div>
      </div>
    </>
  );
}

export default Service