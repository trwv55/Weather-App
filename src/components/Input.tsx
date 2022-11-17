import React, { useState } from "react";

type InputProps = {
  fetchWeather: (a: string) => Promise<void>
}

const Input: React.FC<InputProps> = ({ fetchWeather }) => {
  console.log(fetchWeather);
  const [city, setCity] = useState("");

  const onChangeInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
