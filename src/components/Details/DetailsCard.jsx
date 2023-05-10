import React from "react";
import Userimg from "../../assets/images/Ellipse 37.png";
import flag from "../../assets/images/united-arab-emirates 2.png";

const DetailsCard = () => {
  return (
    <div className="row p-2">
      <div className="col-lg-2">
        <img src={Userimg} alt="user" />
      </div>
      <div className="col-lg-10">
        <div className="d-flex">
          <p>Mr.Forrest S.</p>
          <p>M.A Physiology</p>
          <img src={flag} alt="flag" />
          <p>Recommended</p>
          <p>Verified</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex flex-column">
              <p>Specializations</p>
              <p>Anxiety, Addictions, Family conflicts</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column">
              <p>Languages Spoken</p>
              <p>Spanish, English, Hindi, Urdu</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex flex-column">
              <p>My Approach</p>
              <p>CBT, EMDR, Psychotherapy</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column">
              <div className="d-flex">
                <div className="d-flex flex-column">
                  <p>Lives Impacted</p>
                  <div className="d-flex">
                    <p>icon</p>
                    <p>2038</p>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <p>Reviews Score</p>
                  <div className="d-flex">
                    <p>icon</p>
                    <p>4.5/5</p>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <p>Experience</p>
                  <div className="d-flex">
                    <p>icon</p>
                    <p>4+ Yrs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              Take a look at the upcoming schedule.Take a look at the upcoming
              schedule. Take a look at the upcoming schedule.Take a look
              at.upcoming schedule. Take a look at.ook at. More...
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5"></div>
          <div className="col-lg-2">
            <div className="d-flex">
              <p>icon</p>
              <p>67 bought</p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="d-flex">
              <p>$24 / session</p>
            </div>
          </div>
          <div className="col-lg-3">
            <button>Book Session</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
