import React, { useState } from 'react'
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "../../../@/lib/utils"
import { Button } from "../../../@/components/ui/button"
import { ScrollArea } from '../../../@/components/ui/scroll-area'

import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from "../../../@/components/ui/command"
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "../../../@/components/ui/popover"


const categories = [
   {
      value: "clothing",
      label: "Clothing",
   },
   {
      value: "cookware",
      label: "Cookware",
   },
   {
      value: "cleaning",
      label: "Cleaning",
   },
   {
      value: "shoes",
      label: "Shoes",
   },
   {
      value: "accessories",
      label: "Accessories",
   },
   {
      value: "electronics",
      label: "Electronics",
   },
   {
      value: "books",
      label: "Books",
   },
   {
      value: "sports & outdoors",
      label: "Sports & Outdoors",
   },
   {
      value: "beauty & personal care",
      label: "Beauty & Personal Care",
   },
   {
      value: "toys & games",
      label: "Toys & Games",
   },
   {
      value: "health & household",
      label: "Health & Household",
   },
   {
      value: "automotive",
      label: "Automotive",
   },
   {
      value: "baby products",
      label: "Baby Products",
   },
   {
      value: "pet supplies",
      label: "Pet Supplies",
   },
   {
      value: "grocery & gourmet food",
      label: "Grocery & Gourmet Food",
   },
   {
      value: "musical instruments",
      label: "Musical Instruments",
   },
   {
      value: "office products",
      label: "Office Products",
   },
   {
      value: "tools & home improvement",
      label: "Tools & Home Improvement",
   },
   {
      value: "jewelry",
      label: "Jewelry",
   },
   {
      value: "luggage & travel gear",
      label: "Luggage & Travel Gear",
   },
   {
      value: "garden & outdoor",
      label: "Garden & Outdoor",
   },
   {
      value: "arts, crafts & sewing",
      label: "Arts, Crafts & Sewing",
   },
   {
      value: "industrial & scientific",
      label: "Industrial & Scientific",
   },
   {
      value: "gifts",
      label: "Gifts",
   },
]

interface ComboBoxProps {
   category: string
   setCategory: (category: string) => void
}


const ComboBox: React.FC<ComboBoxProps> = ({ category, setCategory }) => {
   const [open, setOpen] = useState(false)

   return (
      <Popover open={open} onOpenChange={() => setOpen(!open)}>
         <PopoverTrigger asChild className='flex items-center'>
            <Button
               variant="outline"
               role="combobox"
               aria-expanded={open}
               className="w-[200px] justify-between bg-gray-300 font-custom font-bold"
            >
               {category
                  ? categories.find((category1) => category1.value === category)?.label
                  : "Select category..."}
               <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-[200px] p-0">
            <Command className='bg-gray-300'>
               <CommandInput placeholder="Search category..." />
               <CommandEmpty>No category found.</CommandEmpty>
               <CommandList>
                  <ScrollArea className='h-[200px] hide-scroll-bar'>
                     {categories.map((category1) => (
                        <CommandItem
                           key={category1.value}
                           value={category1.value}
                           onSelect={(currentValue) => {
                              setCategory(currentValue === category ? "" : currentValue)
                              setOpen(false)
                           }}>
                           <Check
                              className={cn(
                                 "mr-2 h-4 w-4",
                                 category === category1.value ? "opacity-100" : "opacity-0"
                              )}
                           />
                           {category1.label}
                        </CommandItem>
                     ))}
                  </ScrollArea>
               </CommandList>
            </Command>
         </PopoverContent>
      </Popover>
   )
}

export default ComboBox