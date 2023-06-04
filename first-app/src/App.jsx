import React, { useState, useEffect } from "react";
import './App.css';
import Menu from './menu/menu';

function Weather() {
  const [weatherData, setWeatherData] = useState({
    city: "",
    temp: "",
    pressure: "",
    description: "",
    humidity: "",
    speed: "",
    deg: "",
    icon: ""
  });

  useEffect(() => {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setWeatherData({
          city: data.name,
          temp: data.main.temp,
          pressure: data.main.pressure,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          speed: data.wind.speed,
          deg: data.wind.deg,
          icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        });
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="wrap">
      <Menu />
      <div>
        <div className="header">Погода у місті {weatherData.city}</div>
        <div className="unit">
          <p>Температура: {weatherData.temp} °C</p>
          <p>Тиск: {weatherData.pressure} гПа</p>
          <p>Опис: {weatherData.description}</p>
          <p>Вологість: {weatherData.humidity}%</p>
          <p>Швидкість вітру: {weatherData.speed} м/с</p>
          <p>Напрям вітру: {weatherData.deg}°</p>
        </div>
        <div className="img">
          <img src={weatherData.icon} alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default Weather;