import React, { useState } from 'react';
import './pizzaButton.scss';

const PizzaButton = () => {
  const [count, setCount] = useState('pica');
  const addPizza = () => {
    setCount(`${count} pica`);
  };

  return (
    <div className="pizza-box">
      <button onClick={addPizza}>
        Pievienot pica
      </button>
      <p>
        Man garšo:
        {' '}
        {count}
      </p>
    </div>
  );
};

export default PizzaButton;
