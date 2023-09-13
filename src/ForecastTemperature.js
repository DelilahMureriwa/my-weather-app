import React from "react";
import axios from "axios";

export default function ForecastTemperature(props) {
  function displayForecast(response) {
    console.log(response.data);
  }

  let apiKey = "44288e4ba65ce5205a5a631d146eca67";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);

  return (
    <div className="forecast">
      <div className="row">
        <div className="col-sm">
          MON
          <div className="icon" role="img" aria-label="icon">
            🌤️
          </div>
          <div>
            <span className="max">
              29° <span className="min">9°</span>
            </span>
          </div>
        </div>
        <div className="col-sm">
          TUE
          <div className="icon" role="img" aria-label="icon">
            🌤️
          </div>
          <div>
            <span className="max">
              29° <span className="min">9°</span>
            </span>
          </div>
        </div>
        <div className="col-sm">
          WED
          <div className="icon" role="img" aria-label="icon">
            🌤️
          </div>
          <div>
            <span className="max">
              29° <span className="min">9°</span>
            </span>
          </div>
        </div>
        <div className="col-sm">
          THU
          <div className="icon" role="img" aria-label="icon">
            🌤️
          </div>
          <div>
            <span className="max">
              29° <span className="min">9°</span>
            </span>
          </div>
        </div>
        <div className="col-sm">
          FRI
          <div className="icon" role="img" aria-label="icon">
            🌤️
          </div>
          <div>
            <span className="max">
              29° <span className="min">9°</span>
            </span>
          </div>
        </div>
        <div className="col-sm">
          SAT
          <div className="icon" role="img" aria-label="icon">
            🌤️
          </div>
          <div>
            <span className="max">
              29° <span className="min">9°</span>
            </span>
          </div>
        </div>
        <div className="col-sm">
          SUN
          <div className="icon" role="img" aria-label="icon">
            🌤️
          </div>
          <div>
            <span className="max">
              29° <span className="min">9°</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
