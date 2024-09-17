import React, { useEffect, useState } from "react";
import json from "../json/weather.json";

const Current = () => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [measuredTime, setMeasuredTime] = useState(new Date());

  function runEveryMinute() {
    console.log("Running code every 5 minutes!");
    setMeasuredTime(new Date());
  }

  useEffect(() => {
    runEveryMinute();
    const interval = setInterval(runEveryMinute, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = () => {
    //! Change to fetch when backend is working
    try {
      setCurrentWeather(json);
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  };

  let temperature = currentWeather.temperature;
  let humidity = currentWeather.humidity;
  let barometric_pressure = currentWeather.barometric_pressure;

  const formatTime = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}.${month}. ${hours}:${minutes}`;
  };

  return (
    <>
      <div id="current">
        <h2>Weather now</h2>
        <p>Measured {formatTime(measuredTime)}</p>
        <p id="temperature">Temperature: {temperature}</p>
        <p id="humidity">humidity: {humidity}</p>
        <p id="pressure">Barometric pressure: {barometric_pressure}</p>
        <p id="sun">Sun: 06:37 - 19:56</p>
      </div>
    </>
  );
};

export default Current;
