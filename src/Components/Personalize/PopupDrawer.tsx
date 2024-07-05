import React from 'react'
import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from "../../../@/components/ui/drawer"
import Personalize from './Personalize'
import { MdArrowBack } from 'react-icons/md';

const PopupDrawer = () => {
   return (
      <Drawer>
         <DrawerTrigger>
            Specific Needs
         </DrawerTrigger>
         <DrawerContent className='w-full'>
            <DrawerHeader className='w-full bg-neutral-900 items-center flex justify-between'>
               <DrawerClose>
                  <MdArrowBack className="text-white hover:text-gray-400 cursor-pointer" size="24" />
               </DrawerClose>
               <DrawerTitle className='font-semibold text-xl text-white absolute left-1/2 transform -translate-x-1/2'>
                  HyperPersonalize
               </DrawerTitle>
            </DrawerHeader>
            <Personalize />
         </DrawerContent>
      </Drawer>
   )
}

export default PopupDrawer