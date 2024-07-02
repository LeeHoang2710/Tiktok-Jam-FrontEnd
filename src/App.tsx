import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Corrected Router to Route
import Personalize from './components/Product/Personalize';
import ForYouPage from './pages/ForYouPage'
import MainPage from './pages/MainPage';
import { Button } from '../@/components/ui/button'


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
        <Route path='/new' element={
          <div className='bg-red-600'>
            <Button>Click me</Button>
          </div>} />
      </Routes>
    </div>
  );
}

export default App;