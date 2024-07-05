import { useState, useEffect } from 'react'
import Header from '../components/ForYouPage/Header'
import Footer from '../components/Footer'
import DisplayItem from '../components/ForYouPage/DisplayItem'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks/storeHook';
import { fetchProducts } from '../redux/features/products/productSlice';
import PopupDrawer from '@/components/Personalize/PopupDrawer';
import Rating from '@/components/Rating';


const ForYouPage = () => {
  const themes = [
    { id: "one",
      name: "Mystery",
    },
    {
      id: "two",
      name: "Night",
    },
    {
      id:"three",
      name:"Dreamy",
    },
    {
      id: "four",
      name: "Lofi",
    }
  ];
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  const getAllProduct = useAppSelector((state) => state.product.products)
  const displayItems = getAllProduct.slice(0, 4)
  const [pick, Setpick] = useState(1);
  const [theme, setTheme] = useState<string>(themes[2].id);
  const [isTheme, setIsTheme] = useState<boolean>(false);
  return (
    <div className={`h-screen w-screen max-h-[950px] justify-between max-w-md  theme-${theme} bg-cover mx-auto shadow-lg font-custom transition-all duration-500 ease-in-out`}>
      <Header />
      <div className="h-[90%] w-full font-semibold text-tBase  flex flex-col gap-10 p-6 justify-between rounded-lg">
        <div className="flex text-lg w-full mt-4 justify-between rounded-md opacity-95 ">
          <button key={1}
            className={`
             p-1  border-[1px] border-gray-700 bg-bgPrimary rounded-l-lg w-1/3 text-center
            ${(pick === 1) ? "bg-buttonPrimary  " : ""}
            `}
            onClick={() => { Setpick(1) }}>Favorite
          </button>
          <button key={2} 
            className={` p-1 border-y-[1px] border-gray-700 bg-bgPrimary w-1/3 text-center
            ${(pick === 2) ? "bg-buttonPrimary " : ""}
          `}
            onClick={() => { Setpick(2) }}>Explore
          </button>
          <button key={3} 
            className={` p-1 border-[1px] border-gray-700 bg-bgPrimary rounded-r-lg w-1/3 text-center
            ${(pick === 3) ? "bg-buttonPrimary " : ""}`}
            onClick={() => { Setpick(3) }}>Flash Sale
          </button>
        </div>
        <div className="w-full h-[70%] grid mx-auto grid-rows-2 grid-flow-col gap-8">
          {displayItems.map((product) => (<DisplayItem key={product.id} product={product} />))}
        </div>
        <div className="w-full flex justify-between font-custom font-semibold gap-8 opacity-90 ">
          <div className="w-full ">
          <button className="w-full bg-bgPrimary text-tBase shadow-xl py-3 rounded-xl text-md "><PopupDrawer/></button>
            
          </div>
          <div className="w-full">
            <button className="w-full bg-buttonPrimary text-tBase shadow-xl py-3 rounded-xl text-md ">See More</button>
          </div>
        </div>
        <div className="flex h-10 font-custom w-full items-center ">
        <button className="w-1/5 bg-gradient-to-r from-bgSecondary to-bgPrimary rounded-3xl opacity-95" onClick={() => {setIsTheme(!isTheme)}}>Theme</button> 
        <div className={`w-[90%] ${isTheme ? "visible translate transition duration-400 ease-linear translate-x-[10px] top-2": "fade-outcus transform translate-x-[-px] "}` }>
        {(themes.map((t) => (
            <button key={t.id} className={`w-1/5 cursor-pointer bg-bgPrimary rounded-lg opacity-75`} onClick={() => setTheme(t.id)}>{t.name}</button>)
          ))
        }
        </div>
        
      </div>
      <div className="absolute mx-auto bottom-[100px] left-1/2 -translate-x-1/2"><Rating/></div>
      </div>
      <Footer />
    </div>
  )
}

export default ForYouPage