import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import StartingScreen from './views/StartingScreen';
import AlphabetScreen from './views/AlphabetScreen';
import BreedsScreen from './views/BreedsScreen';
import SingleBreedScreen from './views/SingleBreedScreen';
import NotFound from './views/NotFound';
import BreedState from './context/Breed/BreedState';

const App = () => (
  <BrowserRouter>
    <BreedState>
      <Routes>
        <Route path="/" element={<StartingScreen />} />
        <Route path="breeds" element={<AlphabetScreen />} />
        <Route path="breeds/:id" element={<BreedsScreen />} />
        <Route path="dog/:name" element={<SingleBreedScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BreedState>
  </BrowserRouter>
);

export default App;
