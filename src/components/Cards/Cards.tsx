import React, { useState } from 'react';
import './cards.scss';

const cards = () => {
  const cardDetails = [
    {
      id: '1',
      title: 'First card',
    },
    {
      id: '2',
      title: 'Second card',
    },
    {
      id: '3',
      title: 'Third card',
    },
    {
      id: '4',
      title: 'Fourth card',
    },
    {
      id: '5',
      title: 'Fifth card',
    },
    {
      id: '6',
      title: 'Sixth card',
    },
  ];
  const [cardLibrary, setCardLibrary] = useState(cardDetails);
  const titleUpperCase = cardLibrary.map((item) => ({ id: item.id, title: item.title.toUpperCase() }));
  const buttonDetails = [
    {
      buttonTitle: 'Reset',
      onClick: () => { setCardLibrary(cardDetails); },
    },
    {
      buttonTitle: 'Remove All',
      onClick: () => { setCardLibrary([]); },
    },
    {
      buttonTitle: 'Make all titles UPPERCASE',
      onClick: () => {
        setCardLibrary(titleUpperCase);
      },
    },
  ];

  return (
    <div className="cards">
      <div className="cards">
        {buttonDetails.map((item) => (
          <button
            key={Math.random()}
            onClick={item.onClick}
            className="cards__btn"
          >
            {item.buttonTitle}
          </button>
        ))}
      </div>
      <div className="cards__container">
        {cardLibrary.map((item) => (
          <div key={Math.random()} className="cards__container--card">
            <button className="cards__container--btn">x</button>
            <p key={Math.random()}>
              ID:
              {' '}
              {item.id}
            </p>
            <br />
            <p key={Math.random()}>
              TITLE:
              {' '}
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default cards;
