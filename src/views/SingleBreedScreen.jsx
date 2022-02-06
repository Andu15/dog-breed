import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";

import Logo from '../components/Logo';
import DogContainer from '../components/DogContainer';
import breedContext from '../context/Breed/breedContext.js';
import Spinner from '../components/Spinner';

const SingleBreedScreen = () => {

  const {loading, selectedBreed, getBreed} = useContext(breedContext);

  let {name} = useParams();

  useEffect(() => {
    getBreed(name);
  }, []);
  

  return (
    <div className='container'>
      <div className='logo-app-container'>
        <Logo />
      </div>
      <div>
        {
          loading ? <Spinner/> : <DogContainer selectedBreed={selectedBreed} name={name}/>
        }
      </div>
    </div>
  );
};

export default SingleBreedScreen;
