import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Corrected Router to Route
import Personalize from './components/Product/Personalize';
import ForYouPage from './pages/ForYouPage'
import MainPage from './pages/MainPage';
import { Button } from '../@/components/ui/button'
import "./index.css"

const App = () => {
  return (
    <div className='bg-neutral-800'>
      <Routes>
        <Route path='/' element={<ForYouPage/>}/>
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