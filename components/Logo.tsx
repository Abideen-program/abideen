import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link href="/">
      <motion.div
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full"
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
        <p className="text-2xl font-bold">AB</p>
      </motion.div>
    </Link>
  );
};

export default Logo;