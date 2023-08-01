"use client";
import USDT from "../../public/USDT.png";
import Image from "next/image";
import Footer from "../footer";
import { motion } from "framer-motion";

const overlayVariants = {
  initial: { y: "-100%" },
  animate: { y: 0 },
};

const overlayTransition = {
  type: "tween",
  duration: 0.6,
  ease: "easeInOut",
};

  
  
export default function Events() {
  return (
    <div className="min-h-screen  bg-[#0C0E12] flex-col w-screen relative overflow-hidden">
      <motion.div

        transition={overlayTransition}
        animate="animate"
        initial="initial"
        variants={overlayVariants}
        className="overlay flex items-center justify-center top-0 border-2 border-dotted border-[#C9FE36] absolute w-full bg-[#0C0E12] h-[65vh] lg:h-[80vh] z-10"
      >



      </motion.div>

      <div className=" z-0 ">
        {/* Contains the Image to be replaced */}
        <Image src={USDT} className="h-[65vh] lg:h-[80vh]" />
      </div>
      <Footer />
    </div>
  );
}
