import { motion, useScroll } from "framer-motion";

type Props = {
  reference: any;
};

const LiIcon = ({ reference }: Props) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute -left-5 md:left-1 stroke-dark dark:stroke-light">
      <svg className="-rotate-90 w-[40px] h-[40px] md:w-[75px] md:h-[75px]" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary dark:stroke-primaryDark stroke-2 fill-none"
        ></circle>
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[5px] fill-light dark:fill-dark"
        ></motion.circle>
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
        ></circle>
      </svg>
    </figure>
  );
};

export default LiIcon;
