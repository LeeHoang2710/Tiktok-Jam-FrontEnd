import React from 'react';
import Header from './components/Header/Header';
import ProductCard from './components/Product/ProductCard';
import { Routes, Route } from 'react-router-dom'; // Corrected Router to Route
import Personalize from './components/Product/Personalize';

const App = () => {
  return (
    <div className='bg-neutral-800'>
      <Routes>
        <Route path='/' element={
          <div>
            <Header />
            <ProductCard />
          </div>} />
        <Route path='/personalize' element={<Personalize />} />
      </Routes>
    </div>
  );
}

export default App;