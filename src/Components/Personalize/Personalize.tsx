import React, { useState } from 'react';
import ComboBox from './ComboBox';
import { FaRobot } from 'react-icons/fa';



const Personalize = () => {

   const [minprice, setMinPrice] = useState<number>(100)
   const [maxprice, setMaxPrice] = useState<number>(5000)
   const [showInput, setShowInput] = useState<boolean>(false)
   const [selectedRating, setSelectedRating] = useState('');
   const [selectedPopularity, setSelectedPopularity] = useState('');

   const handleSelectRating = (rating: string) => {
      setSelectedRating(rating);
   };

   const handleSelectPopularity = (popularity: string) => {
      setSelectedPopularity(popularity);
   };
   const handleReset = () => {
      setMinPrice(100);
      setMaxPrice(5000);
      setShowInput(false);
      setSelectedRating('');
      setSelectedPopularity('');
   };

   return (
      <div className="w-full mx-auto bg-neutral-900 shadow-lg overflow-y-scroll">
         <section className="mt-4 flex items-center justify-between px-4">
            <h3 className="text-xl font-semibold text-white">Categories</h3>
            <ComboBox />
         </section>
         <section className="mt-4 px-4">
            <h3 className="text-xl font-semibold text-white">Prices: ${minprice} - ${maxprice}</h3>
            <div className="flex gap-4 mt-2 px-2 py-2  bg-neutral-900">
               <div className="flex mt-2 px-2 py-2 gap-12 bg-neutral-900 justify-center  w-full">
                  <div className='flex flex-col -mt-1'>
                     <p className='text-white text-xl'>Min: $100</p>
                     <p className='text-white text-xl'>Max: $10000</p>
                  </div>
                  <div className="px-2 flex flex-col justify-center items-center gap-y-4">
                     <input type="range" min="100" max="5000" value={minprice} onChange={(event) => setMinPrice(Number(event.target.value))} className="slider w-full transform scale-125" />
                     <input type="range" min="5000" max="10000" value={maxprice} onChange={(event) => setMaxPrice(Number(event.target.value))} className="slider w-full transform scale-125" />
                  </div>

               </div>
            </div>
         </section>
         <section className="mt-4 px-4">
            <h3 className="text-xl font-semibold text-white ">Rating</h3>
            <div className="flex flex-wrap justify-start gap-4 mt-2 px-2">
               {['4.5 - 5 Stars', '4 - 4.5 Stars', '3 - 4 Stars'].map((rating) => (
                  <button
                     key={rating}
                     className={`bg-neutral-600 ${selectedRating === rating ? 'bg-red-400 text-red-200' : 'text-white'} focus:bg-red-400 focus:text-red-200 font-bold py-2 px-4 rounded`}
                     onClick={() => handleSelectRating(rating)}
                  >
                     {rating}
                  </button>
               ))}
            </div>
         </section>
         <section className="mt-4 px-4">
            <h3 className="text-xl font-semibold text-white">Popularity</h3>
            <div className="flex flex-wrap justify-start gap-4 mt-2 px-2">
               {['Trending Now', 'Top Selling', 'Most Visited', 'New Arrivals'].map((popularity) => (
                  <button
                     key={popularity}
                     className={`bg-neutral-600 ${selectedPopularity === popularity ? 'bg-red-400 text-red-200' : 'text-white'} focus:bg-red-400 focus:text-red-200 font-bold py-2 px-4 rounded`}
                     onClick={() => handleSelectPopularity(popularity)}
                  >
                     {popularity}
                  </button>
               ))}
            </div>
         </section>
         <section className='mt-4 flex flex-row items-center justify-between px-4 pb-4'>
            <h3 className="text-xl font-semibold text-white">ChatBot</h3>
            <button className="w-12 h-12 max-w-xs rounded-full bg-blue-600 transition-all cursor-pointer items-center justify-center flex"
               onClick={() => setShowInput(!showInput)}>
               <span className='text-2xl text-white'><FaRobot /></span>
            </button>
         </section>
         {showInput && (
            <div className="w-full p-4 ">
               <textarea
                  className="w-full h-48 p-4 text-xl outline-none"
                  placeholder="Type your needs here..."
               />
            </div>
         )}
         <div className="py-4 px-2 flex bottom-0 left-0 right-0 items-center bg-neutral-800 justify-center gap-2">
            <button className="bg-red-600 text-white font-bold py-2 px-16 rounded-lg" onClick={() => handleReset()}>Reset</button>
            <button className="bg-blue-600 text-white font-bold py-2 px-16 rounded-lg no-text-wrap">Show result</button>
         </div>
      </div>

   );
};

export default Personalize;