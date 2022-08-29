import React from 'react';

const WeatherDisplay = ({ item, removeBtn }) => {
  const { icon } = item.weather[0];

  return (
    <div className='main-info'>
      <div className='main-info-temp'>
        <h3>{item.name}</h3>
        <h1>{Math.round(item.main.temp)}°</h1>
        <h4>{item.weather.description}</h4>
        <p className='feels-like'>feels like: {Math.round(item.main.feels_like)}°</p>
        <p className='humidity'>humidity: {item.main.humidity}%</p>
        <p className='wind'>wind: {Math.round(item.wind.gust)}kmh</p>
      </div>
      <div className='main-info-icon'>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon' />
        <button className='button' onClick={() => removeBtn(item.name)}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default WeatherDisplay;
