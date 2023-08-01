"use client"
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Footer(){
return(

    <div className="bg-[#0C0E12]  w-screen lg:min-h-[9rem] min-h-[13rem]  lg:flex-row ">
    <div className="flex flex-col lg:flex-row  ">

    <div className=" justify-center self-center mt-4 lg:mr-48 ">
        <Link href="/">
    <h1 className="text-white cursor-pointer hover:scale-105 lg:ml-8 text-xl font-semibold font-Mono   ">the new internet is here</h1>
        </Link>
    </div>

    <div className=" lg:flex-col  lg:mt-6  lg:justify-center lg:items-center ">


    <div className="flex basis-1/2 justify-between lg:justify-center  lg:gap-x-10 lg:px-0  gap-x-20 mt-4  px-8 lg:flex-nowrap flex-wrap">

    <div className="About ">
    <Link href="/About">
    <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono"> About </button>
    </Link>
    </div>

    <div className=" / ">
    <h1 className="text-slate-500 text-base font-medium font-Mono"> / </h1>
    </div>

    <div className="Events">
        <Link href="/Events">
    <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono"> Events </button>
        </Link>
    </div>

    <div className=" / hidden lg:block">
    <h1 className="text-slate-500 text-base font-medium font-Mono"> / </h1>
    </div>

    <div className="Join">
    <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono"> Join </button>
    </div>

    <div className=" / ">
    <h1 className="text-slate-500 text-base font-medium font-Mono"> / </h1>
    </div>

    <div className="Zine">
    <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono"> Zine </button>
    </div>

    </div>

    <div className="flex basis-1/2 justify-between lg:justify-center  lg:flex-nowrap lg:px-0 lg:gap-x-8 gap-x-16 mt-3  px-8 flex-wrap">
    <div className="Podcasts">
    <Link href="/Podcast">
    <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono"> Podcasts </button>
    </Link>
    </div>

    <div className=" / ">
    <h1 className="text-slate-500 text-base font-medium font-Mono"> / </h1>
    </div>

    <div className="Youtube">
    <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono"> Youtube </button>
    </div>

    <div className=" / hidden lg:block">
    <h1 className="text-slate-500 text-base font-medium font-Mono"> / </h1>
    </div>

    <div className="Twitter">
    <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono"> Twitter </button>
    </div>

    <div className=" / ">
    <h1 className="text-slate-500 text-base font-medium font-Mono"> / </h1>
    </div>

    <div className="Insta">
    <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono"> Insta </button>
    </div>

    </div>
    </div>

    <div className="Email  lg:ml-36 lg:mt-11 lg:mb-6 mt-4 px-7">
        <input className="text-gray-400 text-sm font-medium font-Mono bg-inherit " placeholder="// Email" /> 
    </div>

    <div className="Subscribe flex-shrink-0  lg:mt-16">
    <button className="text-white hover:bg-[#C9FE36] hover:text-inherit float-right  mr-6  text-base font-semibold italic font-Mono"> Subscribe </button>
    </div>

    
    </div>

    <div className="Terms flex lg:mt-6 items-end justify-end ">
    <button className="text-gray-600 lg:mt-0 hover:bg-[#C9FE36] hover:text-inherit  mt-8 mr-6 text-[10px] font-semibold  font-Mono"> Privacy Policy // Terms of Rewards Program </button>
    </div>
</div>
    )
}