import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/BreedContainer.css';

const BreedContainer = (props) => {

  let navigate = useNavigate();

  const handlerRoute = () => navigate(`/dog/${props.breed}`);

  return <div className="breed-filter-container">
    <button className="breed-filter" onClick={handlerRoute}>{props.breed}</button>
  </div>;
};

export default BreedContainer;
