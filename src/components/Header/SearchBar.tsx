import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHook';
import { FaSearch } from 'react-icons/fa';
import { fetchProducts } from '../../redux/features/products/productSlice';
import TellMore from '../Product/TellMore';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
   const [search, setSearch] = useState('')
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   useEffect(() => {
      dispatch(fetchProducts())
   }, [dispatch])
   const getAllProduct = useAppSelector((state) => state.product.products)
   // filter search
   const filteredProduct = getAllProduct.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase())
   })

   const tellMoreclick = () => {
      setSearch('')
      navigate('/personalize')
   }



   return (
      <>
         {/* SearchBar */}
         <div className='input flex justify-start py-2'>
            <div className='flex items-center '>
               <FaSearch className="text-gray-400 ml-2" />
               <input type="search" placeholder='Search here'
                  onChange={(event) => setSearch(event.target.value)} className='bg-neutral-800 placeholder-gray-400 px-2 py-2 w-80 text-gray-400 outline-none' />
            </div>
         </div>
         {/* Search drop-down */}
         <div className='flex justify-end mt-4'>
            {search &&
               <div className='block absolute bg-white w-88 z-50 my-3 rounded-lg py-2 shadow-lg border border-gray-200' style={{ maxHeight: '600px', overflowY: 'auto' }}>
                  <TellMore onClick={tellMoreclick} />
                  {filteredProduct.length > 0 &&
                     filteredProduct.map((product, index) => (
                        <div key={index} className='px-2 py-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100' onClick={() => { }}>
                           <div className='flex items-center gap-2'>
                              <img src={product.image} className='w-10 h-10 rounded-lg object-cover' alt={product.name} />
                              <div className='flex flex-col'>
                                 <span className='text-sm font-semibold text-gray-800'>{product.name}</span>
                                 <span className='text-xs text-gray-600'>More details</span>
                              </div>
                           </div>
                        </div>
                     ))
                  }
               </div>}
         </div>
      </>
   )
}

export default SearchBar