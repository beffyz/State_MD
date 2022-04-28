import react, { useState } from 'react';
import './colorBox.scss';

const ColorBox = () => {
  const [color, setColor] = useState('bisque');

  const colorArray = ['red', 'blue', 'lightgreen'];
  const changeBoxColor = () => setColor(colorArray[Math.floor(Math.random() * colorArray.length)]);

  return (
    <div className="color-box">
      <div>
        <button onClick={changeBoxColor} className="color-box__btn">
          Mainīt kuba krāsu
        </button>
        <div style={{ backgroundColor: color }} className="color-box__box" />
      </div>
    </div>
  );
};

export default ColorBox;
