import React from 'react';
import style from './style.scss';
import InputData from '../inputData/container';
import OutputData from '../outputData/container';

export default () => (
  <div className="mainContainer">
    <div className="componentsContainer">
      <InputData />
      <OutputData />
    </div>
    <footer className="footer">
      <p>DevGrid Test - 17/08/2017</p>
      <p>Done by: <strong> Alec Ventura </strong></p>
    </footer>
  </div>
);
