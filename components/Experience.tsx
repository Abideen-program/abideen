import { DetailsProps } from "@/types";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  workTwo,
  className,
}: DetailsProps) => {
  const ref = useRef<any>(null);

  return (
    <li
      ref={ref}
      className="my-4 md:my-8 first:mt-0 last:mb-0 w-[90%] md:w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex flex-col justify-between gap-2"
      >
        <h3 className="text-sm md:text-2xl 3xl:text-3xl font-bold capitalize">
          {position}&nbsp;{" "}
          <a href={companyLink} className="text-primary dark:text-primaryDark">
            @{company}
          </a>
        </h3>
        <span className="font-medium text-[12px] md:text-base 3xl:text-3xl text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium text-[12px] md:text-base 3xl:text-3xl 3xl:leading-[50px] w-full">
          {work}
        </p>
        <p
          className={`font-medium w-full text-[12px] md:text-base 3xl:text-3xl 3xl:leading-[50px] ${className}`}
        >
          {workTwo}
        </p>
      </motion.div>
    </li>
  );
};
//font-medium text-sm md:text-base 3xl:text-3xl 3xl:leading-[50px]
const Experience = () => {
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="3xl:my-40">
      <h2 className="my-8 lg:my-20  text-3xl lg:text-6xl text-center font-bold w-full ">
        Experience
      </h2>

      <div className="w-full lg:w-[75%] mx-auto relative">
        {/* The scroll */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="bg-dark dark:bg-light w-[2px] md:w-1 h-full absolute top-0 md:left-10 origin-top"
        />

        <ul className="w-full flex flex-col items-center justify-between">
          <Details
            position="Frontend Dev"
            company="Bhluemountain"
            companyLink="/"
            address="Lagos, Nigeria"
            time="03/2024 - 08/2024"
            work="▸Led UI build for a microfinance raffle system (Next.js, TypeScript, Tailwind, Shadcn UI), directly contributing to 15% customer growth and processing 5,000+ raffle entries.
            ▸Architected a shared component library reused across 10+ pages, cutting new-feature development time by 25%.
            ▸Integrated Framer Motion animation system, reducing animation frame-drop incidents by 50% and boosting satisfaction scores by 20%."
          />

          <Details
            position="Frontend Dev."
            company="Complanet Technologies"
            companyLink="/"
            address="Lagos, Nigeria"
            time="06/2023 - 02/2024"
            work="▸Built the IQ Grant platform for Bet9ja Foundation — a full-featured grant-management tool that processed 1,000+ applications with admin dashboards and agent portals.
            ▸Implemented lazy-loading, code-splitting, and accessibility best practices, reducing initial load by 40% and achieving full WCAG compliance.
            ▸Delivered a fully responsive corporate site in React + Tailwind CSS, increasing mobile engagement by 30%."
          />

          <Details
            position="Intern"
            company="Iobotech"
            companyLink="/"
            address="Lagos, Nigeria"
            time="01/2023 - 06/2023"
            work="Worked on a team responsible for developing a system that enables customers to embrace predictive analytics and ensure effective maintenance of their building around the clock and from anywhere."
            workTwo="Helped about 2000 customers to achieve a drastic reduction of about 50% in their operational costs and stricter security on their building maintenance."
            className="mt-2"
          />

          <Details
            position="Intern"
            company="100Devs"
            companyLink="/"
            address="Los Angeles, USA"
            time="01/2022 - 02/2023"
            work="Rebuilt a 4-year-old vanilla JavaScript-powered e-commerce website using React 18 and the React Context API for a better full-user experience. Rebuilt a 2-year-old prototype vanilla JavaScript-powered restaurant website using React 18, React Redux, and the Redux toolkit."
            workTwo="Built an Amazon clone using React 18, React Redux, the Redux toolkit, and Firebase to manage the state of users."
            className="mt-2"
          />

          <Details
            position="Web Developer"
            company="DevDeen"
            companyLink="/"
            address="Abeokuta, Nigeria"
            time="01/2021 - Present"
            work="Created web applications and static websites for different clients across small and medium-sized businesses. Developed a fashion e-commerce app prototype. Gained excellent skills in using continuous integration tools."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
