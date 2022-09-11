import React from 'react';

const Button = ({ children }) => {
  return (
    <button style={{ backgroundColor: '#0aa1dd', height: 35, fontSize: 15, width: 100 }}>
      {children}
    </button>
  );
};

export default Button;
