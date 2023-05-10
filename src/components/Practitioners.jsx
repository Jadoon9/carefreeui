import React from "react";
import practionar1 from "../assets/images/p1.png";
import practionar2 from "../assets/images/p2.png";
import practionar3 from "../assets/images/p3.png";
import practionar4 from "../assets/images/p4.png";
import practionar5 from "../assets/images/p5.png";
import practionar6 from "../assets/images/p6.png";
import practionar7 from "../assets/images/p7.png";
import practionar8 from "../assets/images/p8.png";
import practionar9 from "../assets/images/p9.png";
import practionar10 from "../assets/images/p10.png";

const Practitioners = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center p-3"
      style={{ height: "20rem" }}
    >
      <p>Our Practitioners are Internationally Qualified & Registered </p>
      <div
        className="d-flex flex-wrap justify-content-center "
        style={{ gap: "50px" }}
      >
        <img src={practionar1} alt="p1" />
        <img src={practionar2} alt="p1" />
        <img src={practionar3} alt="p1" />
        <img src={practionar4} alt="p1" />
        <img src={practionar5} alt="p1" />
        <img src={practionar6} alt="p1" />
        <img src={practionar7} alt="p1" />
        <img src={practionar8} alt="p1" />
        <img src={practionar9} alt="p1" />
        <img src={practionar10} alt="p1" />
      </div>
    </div>
  );
};

export default Practitioners;
