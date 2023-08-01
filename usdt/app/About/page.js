"use client";
import USDT from "../../public/USDT.png";
import Image from "next/image";
import Footer from "../footer";
import { motion } from "framer-motion";

const overlayVariants = {
  initial: { x: "-100%" },
  animate: { x: 0 },
};

const overlayTransition = {
  type: "tween",
  duration: 0.6,
  ease: "easeInOut",
};

const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  const WordAnimation = ({ text }) => {
    const words = text.split(" ");
    return (
      <div className="text-white text-center  font-Mono text-lg p-4 lg:text-4xl">
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay:1+ index * 0.2, duration: 0.5 }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
    );
  };

export default function About() {
  return (
    <div className="min-h-screen  bg-[#0C0E12] flex-col w-screen relative">
      <motion.div

        transition={overlayTransition}
        animate="animate"
        initial="initial"
        variants={overlayVariants}
        className="overlay flex items-center justify-center top-0 border-2 border-dotted border-[#C9FE36] absolute w-full bg-[#0C0E12] h-[65vh] lg:h-[80vh] z-10"
      >

<WordAnimation text="We are a social DAO and media company. Defining a new voice for the new internet." />

      </motion.div>

      <div className=" z-0 ">
        {/* Contains the Image to be replaced */}
        <Image src={USDT} className="h-[65vh] lg:h-[80vh]" />
      </div>
      <Footer />
    </div>
  );
}
