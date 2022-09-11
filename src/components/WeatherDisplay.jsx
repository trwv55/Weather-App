import React from 'react';
import Button from './Button';

const WeatherDisplay = ({ item, removeBtn }) => {
  const { icon } = item.weather[0];
  const { description } = item.weather[0];

  return (
    <div className='main-info'>
      <div className='main-info-temp'>
        <h3>{item.name}</h3>
        <h1>{Math.round(item.main.temp)}°</h1>
        <h4>{description}</h4>
        <p className='feels-like'>feels like: {Math.round(item.main.feels_like)}°</p>
        <p className='humidity'>humidity: {item.main.humidity}%</p>
        <p className='wind'>wind: {Math.round(item.wind.gust)}kmh</p>
      </div>
      <div className='main-info-icon'>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon' />
        <Button className='button' onClick={() => removeBtn(item.name)}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default WeatherDisplay;
