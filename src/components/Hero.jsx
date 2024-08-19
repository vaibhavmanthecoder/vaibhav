
import { motion } from 'framer-motion';
import profilePic from '../assets/vaibhav.jpg';

const containerVariants = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={containerVariants(0)}
              initial='hidden'
              animate='visible'
              className="text-4xl font-bold"
            >
              Vaibhav
            </motion.h1>
            <motion.span
              variants={containerVariants(0.2)}
              initial='hidden'
              animate='visible'
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              software developer
            </motion.span>
            <motion.p
              variants={containerVariants(0.4)}
              initial='hidden'
              animate='visible'
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              Hi, I'm Vaibhav, a driven and ambitious full-stack developer with a passion for building innovative solutions. As a final-year B.Tech student, I've had the opportunity to hone my skills in Java and develop a strong foundation in object-oriented programming principles. With a keen interest in machine learning, I'm currently working on a project that combines my technical expertise with my curiosity for AI. I've also been dedicated to improving my problem-solving skills, having solved nearly 100 data structures and algorithms questions on LeetCode. I believe that strong problem-solving skills are essential for any developer, and I'm committed to continually challenging myself to become a better coder.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={containerVariants(0.6)}
              initial='hidden'
              animate='visible'
              src={profilePic}
              alt="profile picture"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;