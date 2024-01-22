import { easeInOut, motion } from "framer-motion";

const TransitionEffects = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: 0 }}
        transition={{ duration: 0.8, ease: easeInOut }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-primaryDark z-[50]"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: 0 }}
        transition={{ delay:0.2, duration: 0.8, ease: easeInOut }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-light z-[40]"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: 0 }}
        transition={{ delay:0.4, duration: 0.8, ease: easeInOut }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-primary z-[30]"
      />
      
    </>
  );
};

export default TransitionEffects;
