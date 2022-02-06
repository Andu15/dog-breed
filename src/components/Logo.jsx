import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Logo.css';
import Logotipo from '../assets/images/logo-dog-breed.png';

const Logo = () => (
  <Link to="/breeds">
    <img
      src={Logotipo}
      alt="logo app"
      className="logo-img"
      loading="lazy"
    />
  </Link>
);

export default Logo;
