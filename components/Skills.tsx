import { SkillsProps } from "@/types";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }: SkillsProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ y: 0, x: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="flex items-center justify-center md:py-2 md:px-4 lg:py-3 lg:px-6 shadow-dark rounded-full bdark:shadow-light md:bg-dark md:dark:bg-light md:text-light md:dark:text-dark font-semibold cursor-pointer absolute text-sm 3xl:text-3xl "
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="mt-8 md:mt-16 text-3xl lg:text-6xl text-center font-bold">
        Skills
      </h2>
      <div className="relative w-full h-[60vh] md:h-screen 3xl:h-[70vh] rounded-full flex items-center justify-center bg-circularLight dark:bg-circularDark">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center p-1 md:p-4 lg:p-8 rounded-full shadow-dark dark:shadow-light bg-dark dark:bg-light text-light dark:text-dark font-semibold cursor-pointer text-base 3xl:text-3xl"
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="0vw" y="-15vw" />
        <Skill name="JavaScript" x="20vw" y="-5vw" />
        <Skill name="Bootstrap" x="0vw" y="15vw" />
        <Skill name="NextJs" x="-15vw" y="-15vw" />
        <Skill name="ReactJs" x="20vw" y="12vw" />
        <Skill name="Redux" x="-20vw" y="15vw" />
        <Skill name="Firebase" x="15vw" y="-15vw" />
        <Skill name="Git" x="-5vw" y="-23vw" />
        <Skill name="TailwindCSS" x="-30vw" y="-4vw" />
        <Skill name="Framer" x="30vw" y="4vw" />
        <Skill name="Github" x="5vw" y="22vw" />
      </div>
    </>
  );
};

export default Skills;
