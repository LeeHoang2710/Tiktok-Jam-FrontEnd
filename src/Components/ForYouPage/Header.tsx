import React from 'react'
import { MdLiveTv } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
type Props = {}

const Header = (props: Props) => {
  return (
    <div className="flex justify-between font-thin text-white pt-2 mx-8 max-w-md">
      <MdLiveTv className="text-3xl" />
      <div className="flex justify-center items-center text-xl gap-10 w-2/3">
        <div >Following</div>
        <p className="underline underline-offset-8">For You</p>
      </div>
      <CiSearch className="text-3xl" />
    </div>
  )
}

export default Header