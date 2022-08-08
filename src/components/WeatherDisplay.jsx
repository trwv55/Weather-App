import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
  // const [icon, setIcon] = useState();
  const { items } = useSelector((state) => state.weather);
  const { icon } = items.weather[0];

  return (
    <div className='main-info'>
      <h3>{items.name}</h3>
      <div className='icon-temp'>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png `} alt='icon' />
        <h1>{Math.round(items.main.temp)}°</h1>
      </div>
      <h4>{items.weather[0].description}</h4>
    </div>
  );
};

export default WeatherDisplay;
