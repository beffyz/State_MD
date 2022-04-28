import React, { useState } from 'react';
import './secondCalculator.scss';

const secondCalculator = () => {
  const [count, setCount] = useState(0);
  const [firstInput, setFirstInput] = useState(10);
  const [secondInput, setSecondInput] = useState(10);

  const btnLibrary = [
    {
      btnText: '+',
      onClick: () => { setCount(firstInput + secondInput); },
    },
    {
      btnText: '-',
      onClick: () => { setCount(firstInput - secondInput); },
    },
    {
      btnText: 'x',
      onClick: () => { setCount(firstInput * secondInput); },
    },
    {
      btnText: '/',
      onClick: () => { setCount(firstInput / secondInput); },
    },
  ];

  return (
    <div>
      <span key="1">{count}</span>
      <div>
        <input
          className="first-input"
          type="number"
          placeholder={(firstInput).toString()}
          onChange={((e) => { setFirstInput(e.target.valueAsNumber); })}
        />
        {btnLibrary.map((item) => (
          <button onClick={item.onClick}>{item.btnText}</button>
        ))}
        <input
          className="second-input"
          type="number"
          placeholder={(secondInput).toString()}
          onChange={((e) => { setSecondInput(e.target.valueAsNumber); })}
        />
      </div>
    </div>
  );
};

export default secondCalculator;
