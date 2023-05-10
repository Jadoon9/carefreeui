import React from "react";
import article1 from "../assets/images/a4.png";
import article2 from "../assets/images/a2.png";
import article3 from "../assets/images/a3.png";
import article4 from "../assets/images/a1.png";

const Articles = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="d-flex flex-column">
          <h5>Articles</h5>
          <p>
            Build your awareness and get inspired with our researched articles
            on how you can strengthen your mental wellbeing
          </p>
          <img src={article1} alt="art1" />
        </div>
      </div>
      <div className="col-md-4">
        <img src={article2} alt="" />
      </div>
      <div className="col-md-4">
        <div className="d-flex flex-column">
          <img src={article3} alt="" />
          <img src={article4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Articles;
