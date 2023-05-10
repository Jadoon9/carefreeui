import React from "react";
import vector1 from "../assets/images/v1.png";
import vector2 from "../assets/images/v2.png";
import vector3 from "../assets/images/v3.png";
import vector4 from "../assets/images/v4.png";
import vector5 from "../assets/images/v5.png";

const Hero = () => {
  return (
    <div class="row" style={{ height: "90vh" }}>
      <div class="col-md-12 h-80">
        <div className="d-flex flex-column justify-content-between align-items-center">
          <div className="d-flex gap-2">
            <div className="d-flex gap-1 ">
              <p>icon</p>
              <p>Confidentiality</p>
            </div>
            <div className="d-flex gap-1">
              <p>icon</p>
              <p>Self-help resources</p>
            </div>
            <div className="d-flex gap-1">
              <p>icon</p>
              <p>Qualified Practitioners</p>
            </div>
          </div>
          <p>Put Your Mental Health First </p>
          <input
            type="text"
            placeholder="Key Word(s) E.g. Anxiety Depression Anger"
            className="w-50 p-3"
            style={{ borderRadius: "80px" }}
          />
          <div className="d-flex">
            <div className="d-flex flex-column">
              <img
                src={vector1}
                alt=""
                // className="w-50"
                style={{ width: "50px" }}
              />
              <p>Depression</p>
            </div>
            <div className="d-flex flex-column">
              <img
                src={vector2}
                alt=""
                // className="w-50"
                style={{ width: "50px" }}
              />
              <p>Anger & Aggression </p>
            </div>
            <div className="d-flex flex-column">
              <img
                src={vector3}
                alt=""
                // className="w-50"
                style={{ width: "50px" }}
              />
              <p>Eating Disorders</p>
            </div>
            <div className="d-flex flex-column">
              <img
                src={vector4}
                alt=""
                // className="w-50"
                style={{ width: "50px" }}
              />
              <p>Grief & Loss</p>
            </div>
            <div className="d-flex flex-column">
              <img
                src={vector5}
                alt=""
                // className="w-50"
                style={{ width: "50px" }}
              />
              <p>Grief & Loss</p>
            </div>
            <div className="d-flex flex-column">
              <img
                src={vector5}
                alt=""
                // className="w-50"
                style={{ width: "50px" }}
              />
              <p>Trauma & PTSD</p>
            </div>
          </div>
          <div className="d-flex">
            <p>back</p>
            <p>right</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
