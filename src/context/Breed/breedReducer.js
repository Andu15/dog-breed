import { FILTER_BREEDS, SELECTED_BREEDS, LOADING, ERROR } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {

    case FILTER_BREEDS:
      return {
        ...state,
        filterBreeds: payload
      };

    case SELECTED_BREEDS:
      return {
        ...state,
        selectedBreed: payload
      }

    case LOADING:
      return {
        ...state,
        loading: payload
      }

    case ERROR:
      return {
        ...state,
        error: payload
      }
  
    default:
      return state
  }
}