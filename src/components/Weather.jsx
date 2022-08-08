import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosWeather } from '../redux/weatherSlice';
import WeatherDisplay from './WeatherDisplay';

const Weather = () => {
  const { status } = useSelector((state) => state.weather);
  const { inputValue } = useSelector((state) => state.input);
  const apiKey = '6e88c836d5efbcb3aae467c7251ee9fb&units=metric';
  // const apiCity = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';

  const dispatch = useDispatch();

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
