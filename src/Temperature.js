import React from "react";

export default function Temperature() {
  return (
    <div className="row">
      <div className="col-sm-1.5">
        <div className="sunny-cloud">
          <span role="img" aria-label="icon">
            🌤️
          </span>
        </div>
      </div>
      <div className="col-sm-1.5 temp">24°C</div>
    </div>
  );
}
