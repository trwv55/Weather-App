import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setItems } from '../redux/inputSlice';

const Input = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const onChangeInput = (e) => {
    if (e.key === 'Enter') {
      dispatch(setItems(e.target.value));
      setCity('');
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
