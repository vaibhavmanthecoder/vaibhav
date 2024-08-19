import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const bounceTransition = {
  y: {
    duration: 0.5,
    yoyo: Infinity, // This makes the animation bounce back and forth
    ease: "easeInOut",
  },
};

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          className='rounded-2xl border-4 border-neutral-800 p-4'
          animate={{ y: ["0%", "-20%"] }}
          transition={bounceTransition}
        >
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
          className='rounded-2xl border-4 border-neutral-800 p-4'
          animate={{ y: ["0%", "-20%"] }}
          transition={bounceTransition}
        >
          <TbBrandNextjs className='text-7xl text-white' />
        </motion.div>
        <motion.div
          className='rounded-2xl border-4 border-neutral-800 p-4'
          animate={{ y: ["0%", "-20%"] }}
          transition={bounceTransition}
        >
          <SiMongodb className='text-7xl text-green-500' />
        </motion.div>
        <motion.div
          className='rounded-2xl border-4 border-neutral-800 p-4'
          animate={{ y: ["0%", "-20%"] }}
          transition={bounceTransition}
        >
          <SiMysql className='text-7xl text-blue-500' />
        </motion.div>
        <motion.div
          className='rounded-2xl border-4 border-neutral-800 p-4'
          animate={{ y: ["0%", "-20%"] }}
          transition={bounceTransition}
        >
          <FaNodeJs className='text-7xl text-green-500' />
        </motion.div>
        <motion.div
          className='rounded-2xl border-4 border-neutral-800 p-4'
          animate={{ y: ["0%", "-20%"] }}
          transition={bounceTransition}
        >
          <SiPostgresql className='text-7xl text-sky-700' />
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
