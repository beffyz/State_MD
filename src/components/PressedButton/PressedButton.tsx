import React, { useState } from 'react';
import './pressedButton.scss';

const pressedButton = () => {
  const [count, setCount] = useState('Nav nospiests');
  const changeText = () => {
    if (count.length === 13) {
      setCount('Nospiests');
    } else setCount('Nav nospiests');
  };

  return (
    <div className="pressed-btn">
      <button onClick={changeText}>
        Mainīt tekstu uz Nospiests
      </button>
      <div>
        <p className="pressed-btn__text">{count}</p>
      </div>
    </div>
  );
};

export default pressedButton;
