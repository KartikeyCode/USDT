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
      <div className="text-white text-center lg:mt-36  font-Mono text-sm p-4 lg:text-2xl">
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay:1+ index * 0.15, duration: 0.5 }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
    );
  };

  const WordAnimation1 = ({ text }) => {
    const words = text.split(" ");
    return (
      <div className="text-white text-center  font-Mono text-sm p-4 lg:text-2xl">
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay:7.5+ index * 0.15, duration: 0.5 }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
    );
  };


export default function Vision() {
  return (
    <div className="min-h-screen  bg-[#0C0E12] flex-col  w-screen relative">
      <motion.div

        transition={overlayTransition}
        animate="animate"
        initial="initial"
        variants={overlayVariants}
        className="overlay flex-col items-center justify-center top-0 border-2 border-dotted border-[#C9FE36] absolute w-full bg-[#17191C] h-[65vh] lg:h-[80vh] z-10"
      >

<WordAnimation text="Capx Club is a community where learning, contributing, and earning come together. We exist as a dynamic collective of curious learners and dedicated contributors, who embrace a tunnel vision for constant upskilling and growing through hands-on experiences in web3." />
<WordAnimation1 text="Capx helps community members earn crypto by providing opportunities to contribute, earn tokens, and gain exposure to promising startups at an early stage. By leveraging Capx, community members can maximize their earning potential. Capx App is a community-driven platform that empowers members to contribute to early-stage startups and earn tokens." />
      
      </motion.div>

      <div className=" flex-1 w-screen z-0 ">
        {/* Contains the Image to be replaced */}
        <Image src={USDT} className="h-[65vh] lg:h-[80vh]" />
      </div>
      <Footer />
    </div>
  );
}
