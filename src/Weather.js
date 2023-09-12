import React, { useState } from "react";
import axios from "axios";
import Date from "./Date";

export default function Temperature() {
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
    });
  }

  if (loaded) {
    return (
      <div>
        <h1>{weather.city}</h1>
        <div className="row">
          <div className="col-sm-7">
            <div className="date">
              <Date date={weather.date} />
              <span className="day"> Last dated: 18:14</span>
              <br />
              <span className="text-capitalize">{weather.description}</span>
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
        <div className="row">
          <div className="col-sm-1.5">
            <div className="main-icon">
              <img src={weather.icon} alt="weather-icon" />
            </div>
          </div>
          <div className="col-sm-5 temp">
            {Math.round(weather.temperature)}
            <span className="units">°C </span>
            <span className="units">|</span>
            <span className="units"> °F</span>
          </div>
          <div class="col-4" id="condition">
            <ul>
              <li>
                Humidity: <span id="humidity"></span>
                {weather.humidity}%
              </li>
              <li>
                Wind: <span id="wind"></span>
                {Math.round(weather.wind)}km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "44288e4ba65ce5205a5a631d146eca67";
    let city = "Harare";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
}
