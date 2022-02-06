import React, { useReducer } from 'react';
import axios from 'axios';

import breedReducer from "./breedReducer";
import BreedContext from "./breedContext";
import { FILTER_BREEDS, SELECTED_BREEDS, LOADING, ERROR } from "../types";

const BreedState = (props) => {
  const initialState = {
    filterBreeds: [],
    selectedBreed: null,
    loading: false,
    error: null
  }

  const [state, dispatch] = useReducer(breedReducer, initialState);
  
  const filterBreedsByLetter = async (id) => {

    dispatch({
      type: LOADING,
      payload: true
    })

    try {
      const res = await axios.get("https://dog.ceo/api/breeds/list/all");
      const json = await res.data.message;

      const dataByLetter = Object.keys(json);
      const result = dataByLetter.filter(e=>e.slice(0, 1) === id);

      dispatch({
        type: FILTER_BREEDS,
        payload: result
      })

      dispatch({
        type: LOADING,
        payload: false
      })

    } catch(error){
      dispatch({
        type: ERROR,
        payload: error.message
      })

      dispatch({
        type: LOADING,
        payload: false
      })
    }
  }
  
  const getBreed = async (name) => {
    
    dispatch({
      type: LOADING,
      payload: true
    })

    try {
      const res = await axios.get(`https://dog.ceo/api/breed/${name}/images/random`);
      const json = await res.data.message;

      dispatch({
        type: SELECTED_BREEDS,
        payload: json
      })

      dispatch({
        type: LOADING,
        payload: false
      })

    } catch(error){
      dispatch({
        type: ERROR,
        payload: error.message
      })

      dispatch({
        type: LOADING,
        payload: false
      })
    }

  }

  return (
    <BreedContext.Provider value={{
      breeds: state.breeds,
      filterBreeds: state.filterBreeds,
      selectedBreed: state.selectedBreed,
      filterBreedsByLetter,
      getBreed
    }}>
      {props.children}
    </BreedContext.Provider>
  )
}

export default BreedState;
