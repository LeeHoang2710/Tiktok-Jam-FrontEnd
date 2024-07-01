import React, { useEffect, useState } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/storeHook';
import { fetchProducts } from '../../redux/features/products/productSlice';
import { FaTshirt, FaFootballBall, FaUtensils, FaHome, FaShoePrints, FaAccusoft, FaBroom, FaTv, FaBook, FaMagic, FaRobot } from 'react-icons/fa';

const categoryIcons: { [key: string]: JSX.Element } = {
   Clothing: <FaTshirt />,
   Sports: <FaFootballBall />,
   Cookware: <FaUtensils />,
   Home: <FaHome />,
   Shoes: <FaShoePrints />,
   Accessories: <FaAccusoft />,
   Cleaning: <FaBroom />,
   Electronics: <FaTv />,
   Books: <FaBook />,
   Beauty: <FaMagic />
}



const Personalize = () => {

   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   useEffect(() => {
      dispatch(fetchProducts())
   }, [dispatch])

   const getAllProduct = useAppSelector((state) => state.product.products)
   const allCategories = Array.from(new Set(getAllProduct.map(product => product.category).flat()));

   const [minprice, setMinPrice] = useState<number>(100)
   const [maxprice, setMaxPrice] = useState<number>(100)
   const [showInput, setShowInput] = useState<boolean>(false)

   return (
      <div className="max-w-md mx-auto bg-neutral-200 shadow-lg overflow-hidden">
         <div className="py-4 px-2 flex items-center bg-neutral-100">
            <MdArrowBack className="text-gray-800 hover:text-gray-600 cursor-pointer" size="24"
               onClick={() => navigate('/')} />
            <h2 className="text-2xl font-semibold text-gray-800 text-center px-20">Hyperpersonalize</h2>
         </div>
         <section className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700 px-2">Categories</h3>
            <div className="flex items-center justify-start gap-4 mt-2 px-2 py-2 overflow-x-scroll hide-scroll-bar bg-neutral-100">
               {allCategories.slice(0, 10).map((category) => (
                  <div className='flex flex-col items-center' key={category}>
                     <button className="w-12 h-12 max-w-xs rounded-full bg-neutral-200 transition-all cursor-pointer items-center justify-center flex">
                        <span className='text-2xl'>{categoryIcons[category]}</span>
                     </button>
                     <p>{category.length <= 10 ? category : `${category.slice(0, 10)}...`}</p>
                  </div>
               ))}
            </div>
         </section>
         <section className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700 px-2">Prices: ${minprice} - ${maxprice}</h3>
            <div className="flex gap-4 mt-2 px-2 py-2  bg-neutral-100">
               <div className="flex mt-2 px-2 py-2 gap-12 bg-neutral-100 justify-center  w-full">
                  <div className='flex flex-col -mt-1'>
                     <p>Min: $100</p>
                     <p>Max: $10000</p>
                  </div>
                  <div className="px-2 flex flex-col justify-center items-center gap-y-2">
                     <input type="range" min="100" max="10000" value={minprice} onChange={(event) => setMinPrice(Number(event.target.value))} className="slider w-full transform scale-150" />
                     <input type="range" min="100" max="10000" value={maxprice} onChange={(event) => setMaxPrice(Number(event.target.value))} className="slider w-full transform scale-150" />
                  </div>

               </div>
            </div>
         </section>
         <section className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700 px-2">Rating</h3>
            <div className="flex flex-wrap justify-start gap-4 mt-2 px-2">
               <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">5 Stars</button>
               <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">4 Stars & Up</button>
               <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">3 Stars & Up</button>
            </div>
         </section>
         <section className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700 px-2">Popularity</h3>
            <div className="flex flex-wrap justify-start gap-4 mt-2 px-2">
               <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Top Selling</button>
               <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Most Visited</button>
               <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">New Arrivals</button>
            </div>
         </section>
         <section className='mt-4 flex flex-row items-center justify-between px-2 pb-4'>
            <h3 className="text-xl font-semibold text-gray-700">ChatBot</h3>
            <button className="w-12 h-12 max-w-xs rounded-full bg-sky-600 transition-all cursor-pointer items-center justify-center flex"
               onClick={() => setShowInput(!showInput)}>
               <span className='text-2xl'><FaRobot /></span>
            </button>
         </section>
         {showInput && (
            <div className="w-full p-4 ">
               <textarea
                  className="w-full h-56 p-4 text-xl outline-none"
                  placeholder="Type your message here..."
               />
            </div>
         )}
         <div className="py-4 px-2 fixed flex bottom-0 left-0 right-0 items-center bg-neutral-100 justify-center gap-2">
            <button className="bg-neutral-800 text-white font-bold py-2 px-16 rounded-lg">Reset</button>
            <button className="bg-red-600 text-white font-bold py-2 px-16 rounded-lg no-text-wrap">Show result</button>
         </div>
      </div>

   );
};

export default Personalize;