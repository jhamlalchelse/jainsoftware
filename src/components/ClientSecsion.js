import React, { useRef } from "react";
import "./ClientSec.css";

const ClientSecsion = () => {
  const quote1 = useRef(null)
  const quote2 = useRef(null)
  const quote3 = useRef(null);

  const showContentData = ()=>{
    quote1.current.classList.remove("quote1");
    quote2.current.classList.remove("quote2");
    quote3.current.classList.remove("quote3");
  }
  const showContentData2 = () => {
    quote2.current.classList.add("quote2");
    quote1.current.classList.add("quote1");
    quote3.current.classList.remove("quote3");
  };
  const showContentData3 = () => {
    quote2.current.classList.remove("quote2");
    quote1.current.classList.add("quote1");
    quote3.current.classList.add("quote3");
  };
  
  return (
    <>
      <div className="client-sec-div">
        <h3 className="client-header">What Our Clients Say</h3>
        <div className="client-sec-tooltip-content-div">
          <div className="d-flex client-sec-tooltip-content-div-margin">
            <div className="client-sec-tooltip-content" ref={quote1}>
              <img
                src="/testimonial_quote.png"
                alt="quote"
                style={{ height: "30px" }}
              />
              <span>
                Jain Software was beyond terrific – from their attitude and
                enthusiasm to their knowledge and experience with Software
                development. They are doing great and surely best software
                company at Raipur.
              </span>
              <br />
              <p className="client-sec-tooltip-content-para">
                - Hon. Rajesh Munat (Ex-Cabinet Minister, Chhattisgarh)
              </p>
            </div>
            <div
              className="client-sec-tooltip-content"
              style={{ display: "none" }}
              ref={quote2}
            >
              <img
                src="/testimonial_quote.png"
                alt="quote"
                style={{ height: "30px" }}
              />
              <span>
                They worked on AVAST server API project well manner and beyond
                perfection. Deliverables delivered in time. Thanks to their
                raipur software team. Thanks to Sohil Jain.
              </span>
              <p className="client-sec-tooltip-content-para">
                - Petr Chocholous (AVAST Software s.r.o.)
              </p>
            </div>

            <h6
              className="client-sec-tooltip-content"
              style={{ display: "none" }}
              ref={quote3}
            >
              <img
                src="/testimonial_quote.png"
                alt="quote"
                style={{ height: "30px" }}
              />
              <span>
                Well, Jain Software maintained every level of quality while
                developing our hospital management software and ecommerce
                engine. Jain Dental Medical System they developed has many
                features that are more than a normal medical software. Thanks to
                Jain Software, Raipur.
              </span>
              <p className="client-sec-tooltip-content-para">
                - Arvind Jain, Jain Dental Hospital, Raipur
              </p>
            </h6>
          </div>
          <div className="client-sec-tooltip-content-bottom-arrow-div down"></div>
        </div>

        <div className="client-image-logo-div">
          <button className="client-logo1 ms-2" onClick={showContentData}>
            <img src="/client1.png" alt="client1" />
          </button>
          <button onClick={showContentData2}>
            <img src="/client2.png" alt="client2" className="mx-4" />
          </button>
          <button onClick={showContentData3}>
            <img src="/client3.png" alt="client3" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ClientSecsion;
