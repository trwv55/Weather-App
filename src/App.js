import './scss/app.scss';
import React from 'react';
import Weather from './components/Weather';
import Input from './components/Input';

function App() {
  return (
    <div className='App'>
      <Input />
      <Weather />
    </div>
  );
}

export default App;
