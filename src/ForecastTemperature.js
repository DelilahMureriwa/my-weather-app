import React, { useState } from "react";
import axios from "axios";

export default function ForecastTemperature(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col-sm">
            <div>
              {forecast[0].dt}
              <div className="icon">
                <img
                  src={`https://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`}
                  alt="icon"
                  width={70}
                />
              </div>
              <div></div>
              <span className="max">
                {Math.round(forecast[0].temp.max)}°{" "}
                <span className="min">
                  {" "}
                  {Math.round(forecast[0].temp.min)}°
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "6f578b96aa9505bcce148ac22cb85794";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
