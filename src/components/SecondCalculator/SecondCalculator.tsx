import React, { useState } from 'react';
import './secondCalculator.scss';

const SecondCalculator = () => {
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
    <div className="second-calculator">
      <div className="second-calculator__box">
        <input
          className="second-calculator__input"
          type="number"
          placeholder={(firstInput).toString()}
          onChange={((e) => { setFirstInput(e.target.valueAsNumber); })}
        />
        {btnLibrary.map((item) => (
          <button className="second-calculator__btn" onClick={item.onClick}>{item.btnText}</button>
        ))}
        <input
          className="second-calculator__input"
          type="number"
          placeholder={(secondInput).toString()}
          onChange={((e) => { setSecondInput(e.target.valueAsNumber); })}
        />
      </div>
      <span className="second-calculator__span">
        {' '}
        =
        {' '}
        {count}
      </span>
    </div>
  );
};

export default SecondCalculator;
