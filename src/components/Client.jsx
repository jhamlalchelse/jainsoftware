// import React from "react";
// import "./Client.css";
// import Button from "react-bootstrap/Button";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
// import { FiAirplay } from "react-icons/fi";
// import { useState, useRef } from "react";
// import Overlay from "react-bootstrap/Overlay";
// import Popover from "react-bootstrap/Popover";

// const Client = () => {
//   const popover = (
//     <Popover id="popover-basic">
//       <Popover.Body className="tooltips-border">
//         <div>
//           <p style={{color:"rgba(255,255,255,.4)",}}>
//             Well, jain Software was beyond terrific – from their attitude and
//             enthusiasm to their knowledge and experience with Software
//             development. They are doing great and surely best software company
//             at Raipur.
//           </p>
//           <p style={{color:"white"}}>- Hon. Rajesh Munat (Ex-Cabinet Minister, Chhattisgarh)</p>
//         </div>
//       </Popover.Body>
//     </Popover>
//   );
//   const popover1 = (
//     <Popover id="popover-basic">
//       <Popover.Body className="tooltips-border">
//         <div>
//           <p style={{color:"rgba(255,255,255,.4)",}}>
//           Well, Jain Software maintained every level of quality while developing our hospital management software and ecommerce engine. Jain Dental Medical System they developed has many features that are more than a normal medical software. Thanks to Jain Software, Raipur
//           </p>
//           <p style={{color:"white"}}>- Hon. Rajesh Munat (Ex-Cabinet Minister, Chhattisgarh)</p>
//         </div>
//       </Popover.Body>
//     </Popover>
//   );
//   const popover2 = (
//     <Popover id="popover-basic">
//       <Popover.Body className="tooltips-border">
//         <div>
//           <p style={{color:"rgba(255,255,255,.4)",}}>
//           They worked on AVAST server API project well manner and beyond perfection. Deliverables delivered in time. Thanks to their raipur software team. Thanks to Sohil Jain.
//           </p>
//           <p style={{color:"white"}}>- Hon. Rajesh Munat (Ex-Cabinet Minister, Chhattisgarh)</p>
//         </div>
//       </Popover.Body>
//     </Popover>
//   );
//   const [showData, setShowData] = useState('1')
//   return (
//     <>
//       <div className="py-5 client">
//         <h3 className="client-header">What Our Clients Say</h3>
//         <div className="client-image-logo-div" style={{ marginTop: "150px" }}>
//           <OverlayTrigger trigger="click" placement="top" overlay={popover}>
//             <img src="/client1.png" alt="client1" />
//           </OverlayTrigger>
//           <OverlayTrigger trigger="click" placement="top" overlay={popover1}>
//             <img src="/client2.png" alt="client2" className="mx-4" />
//           </OverlayTrigger>
//           <OverlayTrigger trigger="click" placement="top" overlay={popover2}>
//             <img src="/client3.png" alt="client3" />
//           </OverlayTrigger>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Client;
