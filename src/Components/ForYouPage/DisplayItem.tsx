
import pro1 from "../../public/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import { MdShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

type Product = {
  id: string;
  image: string;
  name: string;
  rating_stars: number;
  price_cents: number;
};

type Props = {
  product: Product;
}

const DisplayItem = ({product}: Props) => {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
       <div className="relative mx-auto flex flex-col justify-between items-center pt-6 pb-4 gap-2 w-[90%] h-[90%] rounded-[48px] shadow-xl bg-bgPrimary " onClick={()=>{setFlip(!flip)}}>
        <div className="flex w-5/6 border-2 border-gray-300 items-center h-3/5  rounded-[36px] overflow-hidden">
            <img src={pro1} className="object-cover"></img>
          </div>
          <h3 className="text-center font-semibold text-tBase text-md">Items Testing</h3>
          <div className="flex w-[90%] justify-between items-center">
            <div className="w-3/5 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className={`bg-bgSecondary text-xs font-medium text-white text-center w-[${65}] p-1 leading-none rounded-full`} > 65%</div>
            </div>
            <p className="text-lg font-medium"> 804<span className="text-[10px] pl-[2px]">Sold</span>
            </p>
          </div>
          <h4 className="text-center text-2xl font-semibold text-tBase">
            ${(product.price_cents/100).toFixed(2)} 
            &nbsp;
            <span className="line-through text-lg font-semibold text-tBaseSecondary">${((product.price_cents*1.3)/100).toFixed(2)}</span>
          </h4>
          <div className="absolute flex w-2/3 justify-between text-[42px] top-0 translate -translate-y-1/2">
            <FaHeart className="border-[1px] cursor-pointer border-gray-300 p-2 text-red-400 rounded-full bg-white " />
            <MdShoppingCart className="border-[1px] cursor-pointer border-gray-300 p-2 text-tBase rounded-full bg-white"/>
          </div>

      </div>
      <div className="relative mx-auto flex flex-col justify-between items-center pt-6 pb-4 gap-2 w-[90%] h-[90%] rounded-[48px] shadow-xl bg-bgPrimary " onClick={()=>{setFlip(!flip)}}>
        <div className="flex w-5/6 border-2 border-gray-300 items-center h-3/5  rounded-[36px] overflow-hidden">
            <img src={pro1} className="object-cover"></img>
          </div>
          <h3 className="text-center font-semibold text-tBase  text-md">Items Testing</h3>
          <div className="flex w-5/6 justify-between items-center">
            <div className="w-2/3 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-bgSecondary text-xs font-medium text-white text-center w-[65%] p-1 leading-none rounded-full" > 65%</div>
            </div>
            <p className="text-[10px] font-medium">804 Sold</p>
          </div>
          <h4 className="text-center text-2xl font-semibold text-tBase">
            ${(product.price_cents/100).toFixed(2)} 
            &nbsp;
            <span className="line-through text-lg font-semibold text-tBaseSecondary">${((product.price_cents*1.3)/100).toFixed(2)}</span>
          </h4>
          <div className="absolute flex w-2/3 justify-between text-[42px] top-0 translate -translate-y-1/2">
            <FaHeart className="border-[1px] cursor-pointer border-gray-300 p-2 text-red-400 rounded-full bg-white " />
            <MdShoppingCart className="border-[1px] cursor-pointer border-gray-300 p-2 text-tBase rounded-full bg-white"/>
          </div>

      </div>

  </ReactCardFlip>

  )
}

export default DisplayItem