import React, { useState } from 'react';
import './firstCalculator.scss';

const FirstCalculator = () => {
  const [count, setCount] = useState(0);
  const [takeValue, setTakeValue] = useState(10);
  const btnArray = [
    {
      btnText: '+',
      onClick: () => { setCount(count + takeValue); },
    },
    {
      btnText: '-',
      onClick: () => { setCount(count - takeValue); },
    },
    {
      btnText: 'x',
      onClick: () => { setCount(count * takeValue); },
    },
    {
      btnText: '/',
      onClick: () => { setCount(count / takeValue); },
    },
  ];

  return (
    <div className="first-calculator">
      <span>{count}</span>
      {btnArray.map((item) => (
        <button
          className="first-calculator__btn"
          onClick={item.onClick}
        >
          {item.btnText}
        </button>
      ))}
      <input
        type="number"
        placeholder={(takeValue).toString()}
        onChange={(e) => { setTakeValue(e.target.valueAsNumber); }}
      />
    </div>
  );
};

export default FirstCalculator;
