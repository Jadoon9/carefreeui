import React from "react";

const Statistics = () => {
  return (
    <div class="row" style={{ height: "20vh" }}>
      <div class="col-md-3">
        <div className="d-flex flex-column">
          <h5>1 Bn</h5>
          <h6>People Globally</h6>
          <div>
            <p>have a diagnosable mental health disorder</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div className="d-flex flex-column">
          <h5>1:1</h5>
          <h6>Clinical Outcomes</h6>
          <div>
            <p>when comparing tele-mental health & face to face sessions</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div className="d-flex flex-column">
          <h5>96%</h5>
          <h6>Practitioners endorse</h6>
          <div>
            <p>tele-mental health services, as per international studies</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div className="d-flex flex-column">
          <h5>93%</h5>
          <h6>Clients are satisfied</h6>
          <div>
            <p>with using online platforms for mental health support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
