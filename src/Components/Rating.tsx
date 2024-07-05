import React, { useState } from 'react'
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "../../@/components/ui/dialog"
import { FaAngleDoubleUp } from 'react-icons/fa';

const Rating = () => {
   const [isOpen, setIsOpen] = useState(false)
   const [rating, setRating] = useState(0);

   const handleRating = (rate: number) => {
      setRating(rate);
   };

   return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
         <DialogTrigger asChild>
            <button className='flex items-center justify-center gap-2 text-gray-100 opacity-70'>
               <FaAngleDoubleUp />
               Swipe up to skip
            </button>
         </DialogTrigger>
         <DialogContent className="py-10 max-w-[300px] max-h-[300px] bg-white rounded-lg ">
            <DialogHeader>
               <DialogTitle className='text-xl'>Rate app experience</DialogTitle>
               <DialogDescription className='py-4 text-center'>
                  How would you rate app experience?
               </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center py-2">
               {[1, 2, 3, 4, 5].map((star) => (
                  <button
                     key={star}
                     className={`mx-1 ${star <= rating ? 'text-yellow-500' : 'text-gray-400'} text-2xl`}
                     onClick={() => handleRating(star)}>
                     ★
                  </button>
               ))}
            </div>
            <div className="flex justify-between mt-4">
               <button
                  className="px-4 py-2 bg-blue-500 text-white  hover:bg-blue-700 rounded-lg"
                  onClick={() => setIsOpen(false)}>
                  Submit
               </button>
               <button
                  className="px-4 py-2 bg-gray-500 text-white hover:bg-gray-400 rounded-lg"
                  onClick={() => setIsOpen(false)}>
                  No, Thanks
               </button>
            </div>
         </DialogContent>

      </Dialog>
   )
}

export default Rating