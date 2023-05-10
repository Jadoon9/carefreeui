import React from "react";
import DetailsCard from "./DetailsCard";
import DetailsCalendar from "./DetailsCalendar";

const Details = () => {
  return (
    <div>
      <div className="row g-4" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="col-md-7">
          <DetailsCard />
        </div>
        <div className="col-md-5">
          <DetailsCalendar />
        </div>
      </div>
    </div>
  );
};

export default Details;
