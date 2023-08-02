"use client"
import USDT from "../public/USDT.png" 
import Image from 'next/image'
import Footer from "./footer"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className='min-h-screen  bg-[#0C0E12] flex-col w-screen'>

     <div className=' flex-1 w-screen z-0 '> 
     {/* Contains the Image to be replaced */}
    <Image src={USDT} className="h-[65vh] lg:h-[80vh]" />
    </div>
    <Footer/>

   </div>
  )
}
