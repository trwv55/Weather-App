import React from 'react';

type ButtonProps = {
 children: string
 onClick: () => string
}


const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='button'>
      {children}
    </button>
  );
};

export default Button;
