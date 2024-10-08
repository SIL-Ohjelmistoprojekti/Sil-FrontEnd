// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";

const Current = () => {
    const [currentWeather, setCurrentWeather] = useState([]);
    const [measuredTime, setMeasuredTime] = useState(new Date());

    function runEverySecond() {
        console.log("Running code every second!");
        setMeasuredTime(new Date());
    }

    useEffect(() => {
        runEverySecond();
        const interval = setInterval(runEverySecond, 1000);

        return () => clearInterval(interval);
    }, []);

    const fetchWeather = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/weather/?muoto=json");
            const data = await response.json();

            setCurrentWeather(data);
            console.log(currentWeather.one_hour_rainfall);
            console.log("Running code every minute")
        } catch (err) {
            throw new Error(err.message);
        }
    };

    useEffect(() => {
        fetchWeather();
        const weatherInterval = setInterval(fetchWeather, 60000);

        return () => clearInterval(weatherInterval);
    }, []);

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
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${day}.${month}. ${hours}:${minutes}:${seconds}`;
    };

    return (<>
        <div id="current">
            <h2>Weather now</h2>
            <p>{formatTime(measuredTime)}</p>
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
        </div>
    </>);
};

export default Current;
