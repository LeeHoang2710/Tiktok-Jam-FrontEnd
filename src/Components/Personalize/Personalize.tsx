import React, { useState, useEffect } from 'react';
import ComboBox from './ComboBox';
import { FaRobot } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '@/hooks/storeHook';
import { getProducts } from '../../redux/features/products/querySlice';


let data = {}

const Personalize = () => {
   const allCategories: any = {
      "clothing": ["formal", "tops", "shoes", "pajamas", "hoodies", "grunge", "industrial", "jeans", "business casual", "blouses", "kids", "t-shirts", "sporty", "sweatshirts", "classic", "pants", "shirts", "sleepwear", "sweaters", "dresses", "streetwear", "trousers", "shorts", "scandinavian", "athleisure", "blazers", "artsy", "underwear", "vintage", "polo shirts", "bohemian", "punk", "leggings", "women", "modern", "traditional", "trendy", "men", "minimalist", "ethnic", "jerseys", "bodysuits", "country", "skirts", "preppy", "hats", "casual dresses", "casual", "gothic", "gloves", "polos", "chic", "scarves", "hipster", "lingerie", "socks", "jackets", "sweatpants", "coats", "retro", "suits", "loungewear", "dress shirts"
      ],
      "sport": ["urban", "casual"
      ],
      "cookware": ["formal", "vintage", "country", "glamorous"
      ],
      "home": ["urban", "art deco", "glamorous", "modern"
      ],
      "cleaning": ["bohemian", "modern", "traditional", "minimalist", "art deco", "rustic", "country"
      ],
      "shoes": ["urban", "country", "bohemian", "classic"
      ],
      "accessories": ["country", "retro", "chic"
      ],
      "electronics": ["user-friendly", "compact", "ergonomic", "sleek"
      ],
      "books": ["casual", "industrial", "sporty", "bohemian"
      ],
      "sports & outdoors": ["rustic", "casual", "traditional", "country"
      ],
      "beauty & personal care": ["formal", "vintage", "trendy", "industrial"
      ],
      "toys & games": ["urban", "minimalist", "trendy", "industrial"
      ],
      "health & household": ["art deco", "country", "bohemian", "classic"
      ],
      "automotive": ["urban", "art deco", "minimalist", "country"
      ],
      "baby products": ["vintage", "traditional", "retro", "glamorous"
      ],
      "pet supplies": ["casual", "glamorous", "trendy", "sporty"
      ],
      "grocery & gourmet food": ["country", "trendy", "chic", "classic"
      ],
      "musical instruments": ["urban", "formal", "glamorous", "rustic"
      ],
      "office products": ["modern", "traditional", "trendy"
      ],
      "tools & home improvement": ["art deco", "traditional", "industrial", "retro"
      ],
      "jewelry": ["vintage", "glamorous", "trendy", "minimalist"
      ],
      "luggage & travel gear": ["sporty", "traditional", "classic"
      ],
      "garden & outdoor": ["modern", "traditional", "trendy", "glamorous"
      ],
      "arts, crafts & sewing": ["rustic", "urban", "bohemian"
      ],
      "industrial & scientific": ["modern", "country", "retro", "scandinavian"
      ],
      "gifts": ["trendy", "industrial", "chic", "classic"
      ]
   }

   const [low_price, setMinPrice] = useState<number>(0)
   const [high_price, setMaxPrice] = useState<number>(3000)
   const [showInput, setShowInput] = useState<boolean>(false)
   const [category, setCategory] = useState<string>('')
   const [styles, setStyles] = useState<string[]>([])
   const [AI_query, setQuery] = useState<string>('')
   const [submitTrigger, setSubmitTrigger] = useState<boolean>(false)

   const dispatch = useAppDispatch()
   useEffect(() => {
      // This function will be called whenever the category changes.
      setStyles([]); // Reset selectedStyles to an empty array
   }, [category]);

   useEffect(() => {
      // This effect now depends on submitTrigger
      if (submitTrigger) {
         dispatch(getProducts());
         setSubmitTrigger(false); // Reset trigger
      }
   }, [submitTrigger, dispatch]);

   const handleReset = () => {
      setMinPrice(100);
      setMaxPrice(5000);
      setShowInput(false);
      setCategory('');
      setQuery('');
   };
   const handleSubmit = () => {
      if (low_price === 0 && high_price === 3000 && category === '' && styles.length === 0 && AI_query === '') {
         toast.error("Please select at least one option!", { autoClose: 2000 });
      }
      else {
         const checkbox_categories = { low_price, high_price, category, styles }
         data = { checkbox_categories, AI_query }
         console.log(data);
         setSubmitTrigger(true);
         toast.success("Submit successfully!", { autoClose: 2000 });
      }
   }




   const handleStyleSelect = (selectedStyle: string) => {
      setStyles(prevStyles => {
         if (prevStyles.includes(selectedStyle)) {
            // Remove the style if it's already selected
            return prevStyles.filter(style => style !== selectedStyle);
         } else {
            // Add the style if it's not already selected
            return [...prevStyles, selectedStyle];
         }
      });
   };

   return (
      <>
         <ToastContainer />
         <div className="w-full mx-auto font-custom bg-neutral-900 shadow-lg overflow-y-scroll">
            <section className="mt-4 flex items-center justify-between px-4">
               <h3 className="text-xl font-semibold text-white">Categories</h3>
               <ComboBox category={category} setCategory={setCategory} />
            </section>
            <section className="mt-4 px-4">
               <h3 className="text-xl font-semibold text-white ">Style</h3>
               <div className="flex flex-col gap-4 mt-2 px-2 py-2 overflow-x-scroll hide-scroll-bar bg-neutral-900">
                  {category && allCategories[category] && (
                     <>
                        <div className="flex items-center justify-start gap-4 overflow-x-scroll hide-scroll-bar">
                           {allCategories[category].slice(0, Math.ceil(allCategories[category].length / 2)).map((style: string) => (
                              <button key={style} className={`w-18 h-18 px-4 py-2 font-medium bg-gray-200 transition-all cursor-pointer items-center justify-center flex rounded-lg ${styles.includes(style) ? 'bg-rose-900 text-neutral-200' : ""}`}
                                 onClick={() => handleStyleSelect(style)}>
                                 <span className='text-sm text-nowrap'>
                                    {style.length <= 10 ? style : `${style.slice(0, 10)}..`}
                                 </span>
                              </button>
                           ))}
                        </div>
                        <div className="flex items-center justify-start gap-4 overflow-x-scroll hide-scroll-bar">
                           {allCategories[category].slice(Math.ceil(allCategories[category].length / 2)).map((style: string) => (
                              <button key={style} className={`w-18 h-18 px-4 py-2 bg-neutral-200 transition-all cursor-pointer items-center justify-center flex rounded-lg ${styles.includes(style) ? 'bg-rose-900 text-neutral-200' : ""}`}
                                 onClick={() => handleStyleSelect(style)}>
                                 <span className='text-sm text-nowrap'>
                                    {style.length <= 10 ? style : `${style.slice(0, 10)}..`}
                                 </span>
                              </button>
                           ))}
                        </div>
                     </>
                  )}
               </div>
            </section>
            <section className="mt-4 px-4">
               <h3 className="text-xl font-semibold text-white">Prices: ${low_price} - ${high_price}</h3>
               <div className="flex gap-4 mt-2 px-2 py-2  bg-neutral-900">
                  <div className="flex mt-2 px-2 py-2 gap-12 bg-neutral-900 justify-center  w-full">
                     <div className='flex flex-col -mt-1'>
                        <p className='text-white text-xl'>Min: $0</p>
                        <p className='text-white text-xl'>Max: $3000</p>
                     </div>
                     <div className="px-2 flex flex-col justify-center items-center gap-y-4">
                        <input type="range" min="0" max="1500" value={low_price} onChange={(event) => setMinPrice(Number(event.target.value))} className="slider w-full transform scale-125" />
                        <input type="range" min="1500" max="3000" value={high_price} onChange={(event) => setMaxPrice(Number(event.target.value))} className="slider w-full transform scale-125" />
                     </div>

                  </div>
               </div>
            </section>
            <section className='mt-4 flex flex-row items-center justify-between px-4 pb-4'>
               <h3 className="text-xl font-semibold text-white">ChatBot</h3>
               <button className="w-12 h-12 max-w-xs rounded-full bg-rose-900 transition-all cursor-pointer items-center justify-center flex"
                  onClick={() => setShowInput(!showInput)}>
                  <span className='text-2xl text-white'><FaRobot /></span>
               </button>
            </section>
            {showInput && (
               <div className="w-full p-4 ">
                  <textarea
                     className="w-full h-24 p-4 text-xl outline-none"
                     placeholder="Tell me you circumstances... (eg: i need a dress for a wedding)"
                     value={AI_query}
                     onChange={(event) => setQuery(event.target.value)}
                  />
               </div>
            )}
            <div className="py-4 px-2 flex bottom-0 left-0 right-0 items-center bg-neutral-800 justify-center gap-2">
               <button className="bg-gray-500 text-white font-bold py-2 px-16 rounded-lg" onClick={() => handleReset()}>Reset</button>
               <button className="bg-rose-900 text-white font-bold py-2 px-16 rounded-lg no-text-wrap" onClick={() => handleSubmit()}>Show result</button>
            </div>
         </div>
      </>
   );
};

export default Personalize;
export { data }