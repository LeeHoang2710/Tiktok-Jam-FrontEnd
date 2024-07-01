import { useState,useEffect } from 'react'
import Header from '../Components/ForYouPage/Header'
import Footer from '../Components/Footer'
import DisplayItem from '../Components/ForYouPage/DisplayItem'
import Data from "../../database/products.json"
type Props = {}

const ForYouPage = (props: Props) => {
  const test = Data.slice(0,4);
  const [displayItems, setDisplayItems] = useState(test);
  useEffect(() => {
    setDisplayItems(test);
  }, []);
  const [pick, Setpick] = useState(1);
  return (
    <div className="flex flex-col justify-between max-w-md bg-gradient-to-br from-primary to-third mx-auto shadow-lg">
    <Header/>
    <div className="flex flex-col gap-10 p-6 justify-between rounded-lg">
      <div className="flex mx-4 mt-4 justify-between rounded-md ">
        <button key={1} 
        className={`
          text-lg p-1 h border-[1px] border-r-0 border-gray-700 bg-gray-100 rounded-l-lg w-1/3 text-center
          ${(pick === 1) ? "bg-yellow-200 font-medium " : ""}
          `} 
        onClick={() => {Setpick(1)}}>Favorite</button>
        <button key={2} className={`text-lg p-1 h border-[1px] border-gray-700 bg-gray-100 w-1/3 text-center
        ${(pick === 2) ? "bg-yellow-200 font-medium" : ""}
        `}
        onClick={() => {Setpick(2)}}>Explore</button>
        <button key= {3} className={`text-lg p-1 h border-[1px] border-l-0 border-gray-700 bg-gray-100 rounded-r-lg w-1/3 text-center
        ${(pick === 3) ? "bg-yellow-200 font-medium" : ""}`}
        onClick={() => {Setpick(3)}}>Flash Sale</button>
      </div>
      <div className="grid mx-auto grid-rows-2 grid-flow-col gap-8">
        {displayItems.map((product) => (<DisplayItem key={product.id} product={product}/>))}
      </div>
      <div className="flex justify-between font-medium mx-auto gap-16 ">
        <button className="bg-secondary shadow-xl py-2 px-2 w-[150px] rounded-xl text-md">Not Interested</button>
        <button  className="bg-white shadow-xl py-2 px-2 w-[150px] rounded-xl text-md">See More</button>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default ForYouPage