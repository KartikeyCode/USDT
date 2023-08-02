"use client";
import Link from "next/link";
import USDT from "../../public/USDT.png";
import Image from "next/image";
import Footer from "../footer";
import { motion } from "framer-motion";

const overlayVariants = {
  initial: { y: "100%" },
  animate: { y: 0 },
};

const overlayTransition = {
  type: "tween",
  duration: 0.6,
  ease: "easeInOut",
};

  
  
export default function Members() {
  return (
    <div className="min-h-screen  bg-[#0C0E12] flex flex-col items-center justify-center w-screen relative overflow-hidden">
      <motion.div

        transition={overlayTransition}
        animate="animate"
        initial="initial"
        variants={overlayVariants}
        className="overlay flex lg:flex-row gap-4 lg:gap-12 flex-col justify-center items-center  top-0 border-2 border-dotted border-[#C9FE36] absolute w-full bg-[#17191C] h-[71vh] lg:h-[80.1vh] z-10"
      >

    

    <div className="flex flex-wrap justify-center gap-4 lg:gap-12 items-center ">
          <Link href="https://capx.club/club-contribution" target="_blank">
          <div className="border-4  rounded-lg flex cursor-pointer flex-col justify-center items-center p-2 lg:w-80 lg:h-80 hover:scale-110 transition-transform delay-100 w-40 h-40 bg-[#C9FE36]">
            <h1 className="text-black lg:text-2xl font-semibold text-sm font-Mono text-center"> Club Contribution</h1>
            <h2 className="text-center text-2xl mt-2"> 🏋🏻‍♂️ </h2>
          </div>
          </Link>
          <Link href="https://capx.club/bounties" target="_blank">
          <div className="border-4  rounded-lg flex cursor-pointer flex-col justify-center items-center p-2 lg:w-80 lg:h-80 hover:scale-110 transition-transform delay-100 w-40 h-40 bg-[#C9FE36]">
            <h1 className="text-black lg:text-2xl font-semibold text-sm font-Mono text-center"> Bounties </h1>
            <h2 className="text-center text-2xl mt-2"> 💰 </h2>
          </div>
          </Link>
        </div>
   
        <div className="flex flex-wrap justify-center gap-4 lg:gap-10 items-center ">
        <Link href="https://capx.club/earnings-dashboard" target="_blank">
          <div className="border-4  rounded-lg flex cursor-pointer flex-col justify-center items-center p-2 lg:w-80 lg:h-80 hover:scale-110 transition-transform delay-100 w-40 h-40 bg-[#C9FE36]">
            <h1 className="text-black lg:text-2xl font-semibold text-xs font-Mono text-center"> Earnings Dashboard </h1>
            <h2 className="text-center text-2xl mt-2"> 📈 </h2>
          </div>
          </Link>
          <Link href="https://capx.club/leaderboard" target="_blank">
          <div className="border-4  rounded-lg flex cursor-pointer flex-col justify-center items-center p-2 lg:w-80 lg:h-80 hover:scale-110 transition-transform delay-100 w-40 h-40 bg-[#C9FE36]">
            <h1 className="text-black lg:text-2xl font-semibold text-sm font-Mono text-center"> Leaderboard </h1>
            <h2 className="text-center text-2xl mt-2"> 🎖️ </h2>
          </div>
          </Link>
        </div>
     
      

      </motion.div>

      <div className=" flex-1 w-screen z-0 ">
        {/* Contains the Image to be replaced */}
        <Image src={USDT} className="h-[65vh] lg:h-[80vh]" />
      </div>
      <Footer />
    </div>
  );
}
