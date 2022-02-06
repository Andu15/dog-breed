import React from 'react';

import '../styles/StartingScreen.css';

import Logo from '../components/Logo';
import StartButton from '../components/StartButton';

const StartingScreen = () => {
  return (
    <div
      className="start-container"
    >
      <div className="logo-container">
        <Logo/>
      </div>
      <StartButton text="Ingresar" route="breeds"/>
    </div>
  );
};

export default StartingScreen;
