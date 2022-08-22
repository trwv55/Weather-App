import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosWeather, axiosCoordsWeather } from '../redux/weatherSlice';
import WeatherDisplay from './WeatherDisplay';

const Weather = () => {
  const { status } = useSelector((state) => state.weather);
  const { inputValue } = useSelector((state) => state.input);
  const apiKey = '6e88c836d5efbcb3aae467c7251ee9fb&units=metric';
  // const apiCity = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
  const apiLogLon =
    'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';

  const dispatch = useDispatch();

  const getCoords = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        dispatch(
          axiosCoordsWeather({
            lat,
            lon,
            apiKey,
          }),
        );
      },
      (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      },
    );
  };

  useEffect(() => {
    getCoords();
  }, []);

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
