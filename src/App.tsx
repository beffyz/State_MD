import React, { useState } from 'react';
import './App.scss';
import './assets/normalize.css';
import './assets/flexboxgrid.css';
import PlusMinusBox from './components/PlusMinusBox/PlusMinusBox';
import MultiplyDivideBox from './components/MultiplyDivideBox/MultiplyDivideBox';
import PizzaButton from './components/PizzaButton/PizzaButton';
import ColorBox from './components/ColorBox/ColorBox';
import PressedButton from './components/PressedButton/PressedButton';

const App = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="math-box">
            <PlusMinusBox />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="math-box">
            <MultiplyDivideBox />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <PizzaButton />
        </div>
      </div>
      <div className="row">
        <div>
          <ColorBox />
        </div>
        <div>
          <PressedButton />
        </div>
      </div>
    </div>
  </section>
);

export default App;
