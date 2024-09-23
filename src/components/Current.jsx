import React, {useEffect, useState} from "react";
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
    let one_hour_rainfall = currentWeather.one_hour_rainfall;
    let twenty_four_hour_rainfall = currentWeather.twenty_four_hour_rainfall;
    let average_wind_speed = currentWeather.average_wind_speed;
    let max_wind_speed = currentWeather.max_wind_speed;
    let wind_direction = currentWeather.wind_direction;

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
                <p id="humidity">Humidity: {humidity}</p>
                <p id="pressure">Barometric pressure: {barometric_pressure}</p>
                <h3>Rain:</h3>
                <p id="one_hour_rainfall">One Hour Rainfall: {one_hour_rainfall}</p>
                <p id="twenty_four_hour_rainfall">24 Hour Rainfall: {twenty_four_hour_rainfall}</p>
                <h3>Wind:</h3>
                <p id="average_wind_speed">Average Wind Speed: {average_wind_speed}</p>
                <p id="max_wind_speed">Max Wind Speed: {max_wind_speed}</p>
                <p id="wind_direction">Wind Direction: {wind_direction}°</p>
                <p id="sun">Sun: 06:37 - 19:56</p>
            </div>
        </>
    );
};

export default Current;
