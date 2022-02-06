import React from 'react';

import '../styles/DogContainer.css';

const DogContainer = (props) => {
  return <article className='container-breed-dog'>
    <figure className='container-dog-img'>
      <img
        className='dog-img'
        src={props.selectedBreed}
        alt={"foto de" + props.selectedBreed}
        loading="lazy" />
      <figcaption
        className='dog-breed'
      >Raza: {props.name}
      </figcaption>
    </figure>
  </article>;
};

export default DogContainer;
