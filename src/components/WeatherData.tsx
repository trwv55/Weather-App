import React, { useState, useEffect } from "react";
import Input from "./Input";
import Toggle from "./Toggle";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import { WeatherDataType } from "../@types/WeatherData";


const WeatherData: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherDataType[]>([]);

  //при первом рендере получаем гео поз и рендерим погоду
  useEffect(() => {
    function getPosition(pos: GeolocationPosition): void {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

     positionWeather(lat, lon)
       
    }

    function getErrorMessage(err: unknown) {
      if(err instanceof Error) return console.warn(`ERROR(${err.message}`)
      return console.log(String(err));
    }


    if(navigator.geolocation) 
    navigator.geolocation.getCurrentPosition(getPosition, getErrorMessage);
    
  }, []);

  async function positionWeather(lat: number, lon: Number) {
    const apiKey = "6e88c836d5efbcb3aae467c7251ee9fb";
    let permision = true;
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
      );

      if (permision && data.cod === 200) {
        return setWeatherData((oldArray) => [...oldArray, data]);
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  //удаляем 2й запрос после отправки гео-позиции
  function doubleArr(array: WeatherDataType[]) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i]["name"] !== array[j]["name"]) return;
        array.splice(1, 1);
      }
    }
  }
  doubleArr(weatherData);

  // получем погоду по поиску
  async function fetchWeather(city: string) {
    const apiKey = "6e88c836d5efbcb3aae467c7251ee9fb";
    let permision = true;

    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    );
    weatherData.forEach((weather) => {
      if (weather.name === data.name) {
        console.log("already added");
        permision = false;
      }
    });
    if (permision && data.cod === 200) {
      return setWeatherData((oldArray) => [...oldArray, data]);
    }
  }

  function removeBtn(title: string) {
    const blockRemoveIndx = weatherData.map((weather) => weather.name).indexOf(title);
    const newArr = [
      ...weatherData.slice(0, blockRemoveIndx),
      ...weatherData.slice(blockRemoveIndx + 1),
    ];
    console.log(newArr)
    setWeatherData(newArr);
  }

  return (
    <>
      <Toggle />
      <Input fetchWeather={fetchWeather} />
      {weatherData.map((item, i) => (
        <WeatherDisplay key={i} item={item} removeBtn={removeBtn} />
      ))}
    </>
  );
};

export default WeatherData;
