import { ArrowIcon } from "./Icons";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const goUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={goUp}
        className="bg-light dark:bg-dark w-6 h-6 md:w-10 md:h-10 3xl:w-20 3xl:h-20 p-1 md:p-2 3xl:p-4 border border-dark dark:border-light rounded-md cursor-pointer"
      >
        <ArrowIcon className="w-full dark:fill-light self-center" />
      </motion.div>
    </>
  );
};

export default ScrollToTop;
