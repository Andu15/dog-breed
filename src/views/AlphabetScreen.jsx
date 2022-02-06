import React from 'react';

import '../styles/AlphabetScreen.css';
import Logo from '../components/Logo';
import AlphabetButton from '../components/AlphabetButton';
import alphabet from '../assets/utils/alphabet.json';
import Spinner from '../components/Spinner';

function AlphabetScreen() {

  const alphabetTour = alphabet.map(el => <AlphabetButton key={el.id} id={el.id} letter={el.value} />);

  return (
    <div className='container'>
      <div className='logo-app-container'>
        <Logo />
      </div>
      <h2 className='alphabet-title'>Escoge una opción:</h2>
      <div className='alphabet-grid'>
        {
          alphabet.length === 0 ? <Spinner /> : alphabetTour
        }
      </div>
    </div>
  );
}

export default AlphabetScreen;
