import React, { useState, useEffect, useRef } from 'react';
import Input from './Input';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';

const WeatherData = () => {
  const [weatherData, setWeatherData] = useState([]);
  const isMounted = useRef(false);

  //при первом рендере получаем гео поз и рендерим погоду
  useEffect(() => {
    function getPosition(pos) {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      positionWeather(lat, lon);
    }
    function err() {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(getPosition, err);
  }, []);

  async function positionWeather(lat, lon) {
    const apiKey = '6e88c836d5efbcb3aae467c7251ee9fb';
    let permision = true;
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
      );

      if (permision && data.cod === 200) {
        return setWeatherData((oldArray) => [...oldArray, data]);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  function doubleArr(array, key) {
    return array.reduce((arr, item) => {
      const removed = arr.filter((i) => i[key] !== item[key]);
      return [...removed, item];
    }, []);
    // setWeatherData(doubleCheck);
  }

  useEffect(() => {
    if (isMounted.current) {
      weatherData.shift();
      isMounted.current = false;
    }
    isMounted.current = true;
  }, [weatherData]);

  // получем погоду по поиску
  async function fetchWeather(city) {
    const apiKey = '6e88c836d5efbcb3aae467c7251ee9fb';
    let permision = true;

    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    );
    weatherData.forEach((weather) => {
      if (weather.name === data.name) {
        console.log('already added');
        permision = false;
      }
    });
    if (permision && data.cod === 200) {
      return setWeatherData((oldArray) => [...oldArray, data]);
    }
  }

  function removeBtn(title) {
    const blockRemoveIndx = weatherData.map((weather) => weather.name).indexOf(title);
    const newArr = [
      ...weatherData.slice(0, blockRemoveIndx),
      ...weatherData.slice(blockRemoveIndx + 1),
    ];
    setWeatherData(newArr);
  }

  return (
    <>
      <Input fetchWeather={fetchWeather} />
      {weatherData.map((item, i) => (
        <WeatherDisplay key={i} item={item} removeBtn={removeBtn} />
      ))}
    </>
  );
};

export default WeatherData;
