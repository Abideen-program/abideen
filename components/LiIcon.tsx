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
    <figure className="absolute left-1 border border-red-950 stroke-dark">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-2 fill-none"
        ></circle>
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[5px] fill-light"
        ></motion.circle>
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary"
        ></circle>
      </svg>
    </figure>
  );
};

export default LiIcon;
