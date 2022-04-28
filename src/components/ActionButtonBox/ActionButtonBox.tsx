import React, { useState } from 'react';
import './actionButtonBox.scss';

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ActionButtonBox = () => {
  const [numberLibrary, setNumberArr] = useState([...numberArray]);
  const buttons = [
    {
      title: 'Remove from end',
      onClick: () => { setNumberArr(numberLibrary.slice(0, -1)); },
    },
    {
      title: 'Remove form start',
      onClick: () => { setNumberArr(numberLibrary.slice(1)); },
    },
    {
      title: 'Reset',
      onClick: () => { setNumberArr(numberArray); },
    },
    {
      title: 'Remove all',
      onClick: () => { setNumberArr([]); },
    },
    {
      title: 'Show > 5',
      onClick: () => { setNumberArr(numberLibrary.filter((item) => (item > 5))); },
    },
    {
      title: 'All numbers x2',
      onClick: () => { setNumberArr(numberLibrary.map((item) => (item * 2))); },
    },
    {
      title: 'All numbers / 10',
      onClick: () => { setNumberArr(numberLibrary.map((item) => (item / 10))); },
    },
  ];
  return (
    <div className="number-container">
      {buttons.map((item) => (
        <button
          className="number-container__btn"
          key={Math.random()}
          onClick={item.onClick}
        >
          {item.title}
        </button>
      ))}
      <div className="number-container__box">
        {numberLibrary.map((item) => (
          <div className="number-container__box--line" key={Math.random()}>
            { item }
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionButtonBox;
