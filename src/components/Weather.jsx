import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setItems } from '../redux/weatherSlice';

const Weather = () => {
  const url = '';
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const apiKey = '6e88c836d5efbcb3aae467c7251ee9fb';

  useEffect(() => {
    const weatherData = async () => {
      if (!navigator.geolocation) {
        alert('Службы геолокации не подерживаются вашим браузером');
      } else {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          setLat(coords.latitude);
          setLon(coords.longitude);
        });
      }
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
      )
        .then((res) => res.json())
        .then((result) => {
          setItems(result);
          console.log(result);
        });
    };
    weatherData();
  }, [lat, lon]);

  // console.log('items', items);

  return (
    <div>
      <h1>weather</h1>
      <h4></h4>
    </div>
  );
};

export default Weather;
