import React from 'react';
import { Link } from "react-router-dom";

import '../styles/AlphabetButton.css';

const AlphabetButton = ({ id, letter }) => {

  return <div className="alphabet-btn-container">
    <button
      // onClick={() => breedsListByLetter(id)}
    >
      <Link
        to={`/breeds/${id}`}
        name="button"
        className="letter-btn"
        type="button"
      >{letter}</Link>
    </button>
  </div>;
};

export default AlphabetButton;
