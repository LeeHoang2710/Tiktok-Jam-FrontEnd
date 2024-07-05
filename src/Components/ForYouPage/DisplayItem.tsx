
import pro1 from "../../public/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
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

const DisplayItem = ({ product }: Props) => {
  return (
    <div className="relative flex flex-col justify-between items-center pt-6 pb-4 gap-2 w-44 h-64 rounded-[48px] shadow-xl bg-white">
      <div className="flex w-5/6 border-2 border-gray-300 items-center h-3/5  rounded-[36px] overflow-hidden">
        <img src={pro1} className="object-cover"></img>
      </div>
      <h3 className="text-center font-semibold text-lg">Items Testing</h3>
      <div className="flex w-full justify-between px-2 items-center">
        <div className="w-2/3 bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center w-[45%] p-0.5 leading-none rounded-full" > 45%</div>
        </div>
        <p className="text-[10px] font-medium">8204 Sold</p>
      </div>
      <h4 className="text-center text-2xl font-semibold text-red-500">
        ${(product.price_cents / 100).toFixed(2)}
        &nbsp;
        <span className="line-through text-lg font-semibold text-third">${((product.price_cents * 1.3) / 100).toFixed(2)}</span>
      </h4>
      <div className="absolute flex w-2/3 justify-between text-[42px] top-0 translate -translate-y-1/2">
        <FaHeart className="border-[1px] cursor-pointer border-gray-300 p-2 text-red-400 rounded-full bg-white " />
        <MdShoppingCart className="border-[1px] cursor-pointer border-gray-300 p-2 text-blue-600 rounded-full bg-white" />
      </div>

    </div>
  )
}

export default DisplayItem