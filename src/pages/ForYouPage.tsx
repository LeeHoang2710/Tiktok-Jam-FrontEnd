import { useState, useEffect } from 'react'
import Header from '../components/ForYouPage/Header'
import Footer from '../components/Footer'
import DisplayItem from '../components/ForYouPage/DisplayItem'
import { useAppSelector, useAppDispatch } from '../hooks/storeHook';
import { fetchProducts } from '../redux/features/products/productSlice';
type Props = {}

const ForYouPage = (props: Props) => {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  const getAllProduct = useAppSelector((state) => state.product.products)
  const displayItems = getAllProduct.slice(0, 4)
  const [pick, Setpick] = useState(1);
  const Gradient = "bg-gradient-to-br from-priTheme to-thiTheme";
  return (
    <div className={`h-screen w-screen max-h-[950px] justify-between max-w-md ${Gradient} mx-auto shadow-lg`}>
      <Header />
      <div className="h-5/6 w-full flex flex-col gap-10 p-6 justify-between rounded-lg">
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
        <div className="w-full h-[70%] grid mx-auto grid-rows-2 grid-flow-col gap-8">
          {displayItems.map((product) => (<DisplayItem key={product.id} product={product} />))}
        </div>
        <div className="w-full flex justify-between font-medium mx-auto gap-8">
          <div className="w-1/2 px-4">
            <button className="w-full bg-secTheme shadow-xl py-2 rounded-xl text-sm">Specific Needs</button>
          </div>
          <div className="w-1/2 px-4">
            <button className="w-full bg-white shadow-xl py-2 rounded-xl text-sm">See More</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ForYouPage