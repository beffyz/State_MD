import React, { useState } from 'react';
import './inputBox.scss';

const InputBox = () => {
  const [inputValue, setInputValue] = useState('Some text');
  const [showText, setShowText] = useState('');

  return (
    <div>
      <div className="input-box">
        <button onClick={() => {
          setShowText(inputValue);
          setInputValue('Some text');
        }}
        >
          Parādīt tekstu
        </button>
        <input
          className="input"
          placeholder={inputValue}
          type="text"
          value={inputValue}
          onChange={(e) => { setInputValue(e.target.value); }}
          onClick={(e) => { setInputValue(''); }}
        />
      </div>
      <h2 className="input-display">{showText}</h2>
    </div>

  );
};

export default InputBox;
