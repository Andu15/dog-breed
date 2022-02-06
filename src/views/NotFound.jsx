import React from 'react';
import { Link } from "react-router-dom";

import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className='container middle'>
      <div className="globe">
        <div className="bird">
          <div className="body">
            <div className="eye left"></div>
            <div className="eye right"></div>
            <div className="beak"><div></div></div>
            <div className="feet"></div>
            <div className="wire"></div>
          </div>
          <div className="hills"></div>
          <div className="cloud"></div>
          <div className="cloud small"></div>
        </div>
      </div>

      <h2 className="title-notFound">Oops!
        <br />
        <span className="">Intenta regresando al
          <br/>
          <Link to="/" className="link-content"> Inicio</Link>
        </span>
      </h2>
    </div>
  );
};

export default NotFound;
