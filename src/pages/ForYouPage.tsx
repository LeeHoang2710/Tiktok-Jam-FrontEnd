import { useState, useEffect } from 'react'
import Header from '../components/ForYouPage/Header'
import Footer from '../components/Footer'
import DisplayItem from '../components/ForYouPage/DisplayItem'
import { useAppSelector, useAppDispatch } from '../hooks/storeHook';
import { fetchProducts } from '../redux/features/products/productSlice';
import PopupDrawer from '@/components/Personalize/PopupDrawer';
import Rating from '@/components/Rating';


const ForYouPage = () => {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  const getAllProduct = useAppSelector((state) => state.product.products)
  const displayItems = getAllProduct.slice(0, 4)
  const [pick, Setpick] = useState(1);
  return (
    <div className="flex flex-col justify-between max-w-md bg-gradient-to-br from-priTheme to-thiTheme mx-auto shadow-lg">
      <Header />
      <div className="flex flex-col gap-10 p-6 justify-between rounded-lg">
        <div className="flex mx-4 mt-4 justify-between rounded-md ">
          <button key={1}
            className={`
          text-lg p-1 h border-[1px] border-r-0 border-gray-700 bg-gray-100 rounded-l-lg w-1/3 text-center
          ${(pick === 1) ? "bg-yellow-200 font-medium " : ""}
          `}
            onClick={() => { Setpick(1) }}>Favorite</button>
          <button key={2} className={`text-lg p-1 h border-[1px] border-gray-700 bg-gray-100 w-1/3 text-center
        ${(pick === 2) ? "bg-yellow-200 font-medium" : ""}
        `}
            onClick={() => { Setpick(2) }}>Explore</button>
          <button key={3} className={`text-lg p-1 h border-[1px] border-l-0 border-gray-700 bg-gray-100 rounded-r-lg w-1/3 text-center
        ${(pick === 3) ? "bg-yellow-200 font-medium" : ""}`}
            onClick={() => { Setpick(3) }}>Flash Sale</button>
        </div>
        <div className="grid mx-auto grid-rows-2 grid-flow-col gap-8">
          {displayItems.map((product) => (<DisplayItem key={product.id} product={product} />))}
        </div>
        <div className="flex justify-between font-medium mx-auto gap-16 ">
          <div className="bg-secTheme text-center shadow-xl py-2 px-2 w-[150px] rounded-xl text-md pl-4">
            <PopupDrawer />
          </div>
          <button className="bg-white shadow-xl py-2 px-2 w-[150px] rounded-xl text-md">See More</button>
        </div>
      </div>
      <Rating />
      <Footer />
    </div>
  )
}

export default ForYouPage
