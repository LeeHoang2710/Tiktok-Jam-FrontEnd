// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useAppSelector } from '../../hooks/storeHook';
// import { FaLocationDot } from "react-icons/fa6";

// const ProductCard = () => {
//    const navigate = useNavigate()
//    const getAllProduct = useAppSelector((state) => state.product.products)
//    return (
//       <div>
//          <div className='grid grid-cols-2 gap-4'>
//             {getAllProduct.map((product, index) => (
//                <div key={index} className='bg-gray-200 rounded-lg cursor-pointer' onClick={() => navigate(`/product/${product.id}`)}>
//                   <img src={product.image} className='w-full h-56 rounded-lg' />
//                   <div className='mt-2 px-2'>
//                      <p className='text-md font-semibold'>
//                         {product.name.length <= 40 ? product.name : `${product.name.slice(0, 40)}...`}
//                      </p>
//                      <p className='font-bold text-red-600'>${product.price_cents}</p>
//                      <p className='text-gray-800'>
//                         {product.rating_stars}★ } sold
//                      </p>
//                      <div className='mb-2 flex items-center'>
//                         <FaLocationDot />
//                         <p className='text-gray-800'> Ho Chi Minh City</p>
//                      </div>
//                   </div>
//                </div>
//             ))}
//          </div>
//       </div>
//    )
// }

// export default ProductCard