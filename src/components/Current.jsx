import React, { useEffect, useState } from "react";

const Current = () => {

  const [currentWeather, setCurrentWeather] = useState([]);


  //! Fix the fetch 

  useEffect(() => {
    fetchWeather();
  }, [])

  const fetchWeather = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/weather/?muoto=json");
      const data = await response.json();

      setCurrentWeather(data);
      console.log(currentWeather.one_hour_rainfall);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return (
    <>
      <div id="current">
        <h2>Weather now</h2>
        <p>Measured 10.9. 12:05</p>
        <p id="temperature">temperature: 21.5°</p>
        <p id="humidity">humidity: 59%</p>
        <p id="sun">Sun: 06:37 - 19:56</p>
      </div>
    </>
  );
};

export default Current;
