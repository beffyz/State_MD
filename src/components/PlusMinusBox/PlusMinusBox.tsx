import React, { useState } from 'react';
import './plusMinusBox.scss';

const PlusMinusBox = () => {
  const [count, setCount] = useState(0);

  const firstButtonLine = [
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
        setCount(count + 1);
      },
    },
    {
      key: 3,
      title: '-',
      mathAction: () => {
        setCount(count - 1);
      },
    },
  ];

  return (
    <div className="plus-minus">
      {firstButtonLine.map((item, key) => (
        <div key={item.key} className="plus-minus__element">
          <button onClick={item.mathAction}>
            {item.title}
          </button>
        </div>
      ))}
      <span className="plus-minus__element">{count}</span>
    </div>
  );
};

export default PlusMinusBox;
