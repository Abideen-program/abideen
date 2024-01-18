import { AnimatedTextProps } from "@/types";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.4,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  return (
    <div className="w-full  md:py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`inline-block w-full text-dark dark:text-light font-semibold capitalize text-8xl ${className}`}
      >
        {text.split(" ").map((word, idx) => {
          return (
            <motion.span
              variants={singleWord}
              key={word + "-" + idx}
              className="inline-block md:leading-[50px] 3xl:leading-[100px]"
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
