import React, { useState, useEffect } from "react";
import './App.css';

function Weather () {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [pressure, setPressure] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [speed, setSpeed] = useState("");
  const [deg, setDeg] = useState("");
  const [icon, setIcon] = useState("");

  useEffect (() => {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCity(data.name);
        setTemp(data.main.temp);
        setPressure(data.main.pressure);
        setDescription(data.weather[0].description);
        setHumidity(data.main.humidity);
        setSpeed(data.wind.speed);
        setDeg(data.wind.deg);
        setIcon(`http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Погода у місті {city}</h2>
      <p>Температура: {temp} °C</p>
      <p>Тиск: {pressure} гПа</p>
      <p>Опис: {description}</p>
      <p>Вологість: {humidity}%</p>
      <p>Швидкість вітру: {speed} м/с</p>
      <p>Напрям вітру: {deg}°</p>
      <img src={icon} alt="icon" />
    </div>
  );
}

export default Weather;