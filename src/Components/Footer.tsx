import React from 'react'
// import { AiFillHome } from "react-icons/ai";
// import { HiMiniShoppingBag } from "react-icons/hi2";
// import { RiInboxLine } from "react-icons/ri";
import Home from "../public/Elements/Home.svg"
import Discover from "../public/Elements/Discover.svg"
import BackHome from "../public/Elements/Button Shape.svg"
import Inbox from "../public/Elements/Inbox.svg"
import Me from "../public/Elements/Me.svg"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="flex justify-between cursor-pointer py-2 bg-black px-8 max-w-md fixed-footer-mobile">
      <img src={Home}></img>
      <img src={Discover}></img>
      <img src={BackHome}></img>
      <img src={Inbox}></img>
      <img src={Me}></img>
    </div>
  )
}

export default Footer