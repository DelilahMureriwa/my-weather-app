import React from "react";

export default function Date() {
  return (
    <div className="row">
      <div className="col-sm-7">
        <div className="date">
          Saturday, 02 September 2023
          <span className="day"> Last dated: 18:14</span>
          <br />
          <span className="appearance">Clear Sky</span>
        </div>
      </div>
      <div className="col-sm-5">
        <form id="city-form">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter a city..."
            autoFocus="on"
          />
          <div className="form-group"></div>
        </form>
      </div>
    </div>
  );
}
