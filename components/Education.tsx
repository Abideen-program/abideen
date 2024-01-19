import { DetailsProps, EduProps } from "@/types";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info, className }: EduProps) => {
  const ref = useRef<any>(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl 3xl:text-3xl font-bold capitalize">{type}</h3>
        <span className="font-medium text-sm md:text-base 3xl:text-3xl text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-sm md:text-base 3xl:text-3xl 3xl:leading-[50px]">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32 ">
      <h2 className="font-bold text-center text-6xl w-full mb-20">Education</h2>

      <div className="lg:w-[75%] mx-auto relative">
        {/* The scroll */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="bg-dark dark:bg-light w-1 h-full absolute top-0 left-10 origin-top"
        />

        <ul className="w-full flex flex-col items-center justify-between">
          <Details
            type="master of science in biotechnology"
            place="University of Chester"
            time="10/2021 - 10/2022"
            info="Complete a master's project on the absorption of nutrient by pig cell lines under both normal and oxidate-induced stress conditions"
          />

          <Details
            type="bachelor of science in plant biology"
            place="University of Ilorin"
            time="09/2015 - 09/2019"
            info="Complete a thesis on the chracterization of endophytic fungi found in Chromolaena odorata"
          />

          <Details
            type="online coursework"
            place="Zero to Mastery"
            time="2021 - Present"
            info="Completed coursework in advanced topics in ReactJs, NextJs, JavaScript, TailwindCSS, and web development"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
