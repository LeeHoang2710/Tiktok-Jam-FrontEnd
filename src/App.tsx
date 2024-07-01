import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Corrected Router to Route
import Personalize from './components/Product/Personalize';
import ForYouPage from './pages/ForYouPage'
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <div className='bg-neutral-800'>
      <Routes>
        <Route path='/foryou' element={<ForYouPage />} />
        <Route path='/' element={
          <div>
            <MainPage />
          </div>} />
        <Route path='/personalize' element={<Personalize />} />
      </Routes>
    </div>
  );
}

export default App;