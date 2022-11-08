import React from 'react'
import './Footer.css'
import { AiOutlineFacebook } from "react-icons/ai";
import {CiFacebook, CiInstagram, CiLinkedin, CiYoutube} from 'react-icons/ci'
import { Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <footer className="mt-5">
        <div className="footer-dive ">
          <div>
            <h5 className="text-fw-fs">
              Connect with us on every social network
            </h5>
            <button className="footer-btn mt-4">CONNECT WITH THINKERS</button>
            <h5 className="mt-4 text-fw-fs">
              Email : global[at] Jain.software
            </h5>
            <h5 className="my-4 text-fw-fs">Phone: +91-9111554999</h5>
            <h5 className="footer-address-color pb-2">
              Corporate Office : First Floor ,Jairam Complex,JaiStambh Chowk
              ,Raipur . <br /> Pincode : 492001,India . Branches at Hyderabad .
              Raipur . Minneapolis{" "}
            </h5>
            <CiFacebook className="footer-social-logo" />
            <CiLinkedin className="footer-social-logo" />
            <CiYoutube className="footer-social-logo" />
            <CiInstagram className="footer-social-logo" />
            <p className="footer-discription-color mt-1">
              Customised Software Development | Enterprise Software Development
              | Custom Software Development | Cloud Software Development |
              Desktop Software Development | Inventory Software Development |
              Hospital Management Software Development | Billing Software
              Development | Accounting Software Development | Gym Software | Gym
              Management Software | Transport Management Software | Truck
              Management Software | Restaurant Management Software | Real Estate
              Software Development | Lead Software Development | HRM Development
              | School Management Software | Raipur Chhattisgarh
            </p>
          </div>
          <div className="col-lg-4 mx-lg-3">
            <h5 className="text-fw-fs">Way towards new IT Innovations</h5>
            <button className="footer-btn mt-4">JAIN SOFTWARE SOCIAL</button>
            <button className="footer-anch-btn mt-3">
              Free Software Development
            </button>{" "}
            <br />
            <button className="footer-anch-btn">₹ 4999 Campaign</button> <br />
            <button className="footer-anch-btn">
              Free Domain + Server
            </button>{" "}
            <br />
            <button className="footer-anch-btn">For Startups</button> <br />
            <button className="footer-anch-btn">
              For Event Partners.
            </button>{" "}
            <br />
            <button className="footer-anch-btn margin-start-sd">
              Privacy Policy. | Terms. | Disclaimer.
            </button>
            <p className="footer-discription-color mt-2">
              Customised Website Development | Enterprise Website Development |
              Custom Website Development | Corporate Website Development |
              CryptoCurrency Website Development | Dental Website Development |
              Hospital Website Development | Magento E-commmerce Website
              Development | Shopify Website Development | Ecommerce Website
              Development | Custom Ecommerce Website Development | Real Estate
              Website Development | Raipur Website Development | Restaurant
              Website Development | School Website Development | Steel Website
              Development | Responsive Website Development | Affordable Website
              Development | AWS Development | CakePHP | CodeIgniter Development
              | WordPress Development | WooCommerce Development | WooCommerce
              Developers | OpenCart Developers | Python Development | Raipur
              Chhattisgarh
            </p>
          </div>
          <div>
            <h5 className="text-fw-fs">Leading Software Company in India</h5>
            <button className="footer-btn mt-4">DELIVERING PERFECTION</button>
            <button className="footer-anch-btn mt-3">
              About Jain Software
            </button>{" "}
            <br />
            <button className="footer-anch-btn">Careers</button> <br />
            <button className="footer-anch-btn">Newsroom</button> <br />
            <button className="footer-anch-btn">Knowledgeable Blog</button>{" "}
            <br />
            <button className="footer-anch-btn">Events</button> <br />
            <button className="footer-anch-btn">Sitemap</button>
            <p className="footer-discription-color mt-2">
              Customised App Development | Enterprise App Development | Custom
              App Development | Cloud App Development | Flutter App Development
              | iOT Software Development | NodeJS App Development | React App
              Development | Accounting App Development | Gym App Development |
              Fitness App Development | Gym Management App | Transport App
              Software | Truck Management Mobile App | Restaurant Management App
              | AngularJS Development | Ionic App Development | React Native |
              PWA Development | AR\VR Development | Industrial Automation |
              Smart Healthcare Automation | Raipur Chhattisgarh
            </p>
            <h6 style={{ color: "darkslategrey" }}>
              Jain Software Private Limited
            </h6>
          </div>
        </div>
        <hr />
        <p className='footer-copy-write'>
          © Jain Software Foundation 2021. Business ReDefined by Jain Software |
          Delivering Perfection
        </p>
      </footer>
    </>
  );
}

export default Footer