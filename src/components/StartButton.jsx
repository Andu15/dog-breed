import React from 'react';
import { Link } from "react-router-dom";

import '../styles/StartButton.css';

const StartButton = ({ text, route }) => {
  return (
    <div className='btn-container'>
      <Link
        to={`/${route}`}
        type="button"
        name="button"
        className='btn'
      >{text}</Link>
    </div>)
};

export default StartButton;
