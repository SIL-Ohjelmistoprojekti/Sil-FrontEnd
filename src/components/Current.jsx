import React, { useEffect, useState } from "react";
import json from "../json/weather.json";

const Current = () => {
  const [currentWeather, setCurrentWeather] = useState([]);

  

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = () => { //! Change to fetch when backend is working
    try {
      setCurrentWeather(json); 
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div id="current">
        <h2>Weather now</h2>
        <p>Measured 10.9. 12:05</p>
        <p id="temperature">Temperature: {currentWeather.temperature[0]}</p>
        <p id="humidity">humidity: {currentWeather.humidity[0]}</p>
        <p id="pressure">
          Barometric pressure: {currentWeather.barometric_pressure[0]}
        </p>
        <p id="sun">Sun: 06:37 - 19:56</p>
      </div>
    </>
  );
};

export default Current;
