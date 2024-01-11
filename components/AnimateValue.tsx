import { AnimateValueProps } from "@/types";
import { useEffect, useRef } from "react";
import { useMotionValue, useInView, useSpring } from "framer-motion";

const AnimateValue = ({ value }: AnimateValueProps) => {
  const ref = useRef<any>();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 4000 });
  const inView = useInView(ref);

  //use this to check if the value is visible on view port,
  //then set the value to motion value
  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  //use this to animate the value
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        return (ref.current.innerText = latest.toFixed(0));
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default AnimateValue;
