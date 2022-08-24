import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosWeather, setItems } from '../redux/weatherSlice';
import WeatherDisplay from './WeatherDisplay';

const Weather = () => {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const { status, items } = useSelector((state) => state.weather);
  const { inputValue } = useSelector((state) => state.input);
  const apiKey = '6e88c836d5efbcb3aae467c7251ee9fb&units=metric';
  // const apiCity = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
  const apiLogLon =
    'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';

  const dispatch = useDispatch();

  function getCoords() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      },
    );
  }

  useEffect(() => {
    getCoords();
  }, []);

  console.log(lat, lon);

  useEffect(() => {
    async function coordsWeather(lat, lon) {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
        );
        dispatch(setItems(data));
      } catch (error) {
        alert('Ошибка при загрузки погоды');
      }
    }

    coordsWeather(lat, lon);
  }, [lat, lon]);

  useEffect(() => {
    dispatch(
      axiosWeather({
        inputValue,
        apiKey,
      }),
    );
  }, [inputValue]);

  return <div className='weather-wrapper'>{status === 'succeed' && <WeatherDisplay />}</div>;
};

export default Weather;
