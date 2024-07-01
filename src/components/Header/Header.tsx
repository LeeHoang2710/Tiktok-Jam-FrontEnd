import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import { FaShoppingCart, FaBars } from 'react-icons/fa'; // Import icons

const Header = () => {
   const navigate = useNavigate();

   return (
      <nav className='bg-neutral-800 fixed top-0 flex sm:justify-between items-center px-1 gap-1'>
         <SearchBar />
         <div className='flex items-center'>
            <FaBars className='text-white mr-4 cursor-pointer' onClick={() => {/* Handle menu toggle */ }} />
            <FaShoppingCart className='text-white mr-4 cursor-pointer' onClick={() => navigate('/cart')} />
         </div>
      </nav>
   )
}

export default Header;