import React, { useState } from "react";

const Input = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const onChangeInput = (e) => {
    if (e.key === "Enter") {
      fetchWeather(city);
      setCity("");
    }
  };

  return (
    <div className='input-wrapper'>
      <input
        className='input'
        type='text'
        placeholder='Введите город'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={onChangeInput}
      />
    </div>
  );
};

export default Input;
