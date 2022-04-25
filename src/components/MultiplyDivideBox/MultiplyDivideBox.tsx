import React, { useState } from 'react';
import './multiplyDivideBox.scss';

const multiplyDivideBox = () => {
  const [count, setCount] = useState(0);

  const secondButtonLine = [
    {
      key: 1,
      title: 'Reset',
      mathAction: () => {
        setCount(count - count);
      },
    },
    {
      key: 2,
      title: '+',
      mathAction: () => {
        setCount(count + 10);
      },
    },
    {
      key: 3,
      title: '-',
      mathAction: () => {
        setCount(count - 10);
      },
    },
    {
      key: 4,
      title: 'x',
      mathAction: () => {
        setCount(count * 10);
      },
    },
    {
      key: 5,
      title: '/',
      mathAction: () => {
        setCount(count / 10);
      },
    },
  ];

  return (
    <div className="multiply-divide">
      {secondButtonLine.map((item) => (
        <div key={item.key} className="multiply-divide__element">
          <button onClick={item.mathAction}>
            {item.title}
          </button>
        </div>
      ))}
      <span className="multiply-divide__element">{count}</span>
    </div>
  );
};

export default multiplyDivideBox;
