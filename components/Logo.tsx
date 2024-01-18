import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link href="/">
      <motion.div
        className="w-10 h-10 lg:w-16 lg:h-16 3xl:w-20 3xl:h-20 bg-dark text-light flex items-center justify-center rounded-full animate-spin-slow border border-transparent dark:border-light"
        whileHover={{
          background: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        <p className="lg:text-2xl 3xl:text-4xl font-bold">DD</p>
      </motion.div>
    </Link>
  );
};

export default Logo;