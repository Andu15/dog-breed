import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";

import '../styles/BreedsScreen.css';
import Logo from '../components/Logo';
import Search from '../components/Search';
import BreedContext from '../context/Breed/breedContext';
import Spinner from '../components/Spinner';
import BreedContainer from '../components/BreedContainer';

const BreedsScreen = () => {

  const { loading, filterBreeds, filterBreedsByLetter } = useContext(BreedContext);

  const [searchText, setSearchText] = useState("");
  let [newData, setNewData] = useState([]);

  let {id} = useParams();

  useEffect(() => {
    filterBreedsByLetter(id);
  }, []);

  const handlerSearch = () => {
    filterData(searchText);
  }

  const filterData = async (text) => {
    let result = await filterBreeds.filter((el)=>{
      if(el.trim().toLowerCase().includes(text.trim().toLowerCase())){
        return el;
      }
    })
    setNewData(() => result);
  }

  const dataFetch = newData.length ? newData.map((breed, index) => <BreedContainer key={index} breed={breed}/>) : filterBreeds.map((breed, index) => <BreedContainer key={index} breed={breed}/>);

  return (
    <div className='container'>
      <div className='nav-container'>
        <div className='logo-app-container'>
          <Logo />
        </div>
        <Search handlerSearch={() => handlerSearch()} searchText={searchText} setSearchText={setSearchText}/>
      </div>
      <div className='breeds-list-container'>
        {
          loading ? <Spinner/> : dataFetch
        }
      </div>
    </div>
  );
};

export default BreedsScreen;
