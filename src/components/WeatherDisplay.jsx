import React from 'react';
import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
  const { items } = useSelector((state) => state.weather);
  const { icon } = items.weather[0];

  return (
    <div className='main-info'>
      <div className='main-info-temp'>
        <h3>{items.name}</h3>
        <h1>{Math.round(items.main.temp)}°</h1>
        <h4>{items.weather[0].description}</h4>
        <p className='feels-like'>feels like: {Math.round(items.main.feels_like)}°</p>
        <p className='humidity'>humidity: {items.main.humidity}%</p>
        <p className='wind'>wind: {Math.round(items.wind.gust)}kmh</p>
      </div>
      <div className='main-info-icon'>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png `} alt='icon' />
      </div>
    </div>
  );
};

export default WeatherDisplay;
