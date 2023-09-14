import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

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
            <ForecastDay forecast={forecast[0]} />
          </div>
          <div className="col-sm">
            <ForecastDay forecast={forecast[1]} />
          </div>
          <div className="col-sm">
            <ForecastDay forecast={forecast[2]} />
          </div>
          <div className="col-sm">
            <ForecastDay forecast={forecast[3]} />
          </div>
          <div className="col-sm">
            <ForecastDay forecast={forecast[4]} />
          </div>
          <div className="col-sm">
            <ForecastDay forecast={forecast[5]} />
          </div>
          <div className="col-sm">
            <ForecastDay forecast={forecast[6]} />
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
