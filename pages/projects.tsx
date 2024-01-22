import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { ProjectProps } from "@/types";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Jumia from "../public/images/jumia.png";
import Fresh from "../public/images/fresh.png";
import Shoppy from "../public/images/shoppy.png";
import Bank from "../public/images/bank.png";
import Disney from "../public/images/disney.png";
import Cocktail from "../public/images/cocktail.png";
import TransitionEffects from "@/components/TransitionEffects";

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: ProjectProps) => {
  return (
    <article className="relative w-full flex flex-col xl:flex-row items-center justify-between p-4 xl:p-12 gap-6 rounded-2xl xl:rounded-3xl border border-dark dark:border-light bg-light dark:bg-dark shadow-2xl cursor-pointer transform hover:rotate-x-30 hover:transition-all hover:duration-500">
      {/* <div className="absolute top-0 left-5 h-[103%] w-[102%] bg-dark rounded-3xl -z-10" /> */}
      <Link
        href={link}
        target="_blank"
        className="w-full xl:w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-[1.07] transition-all duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full xl:w-1/2 flex flex-col items-start justify-between gap-y-2 3xl:gap-3">
        <span className="text-primary dark:text-primaryDark font-medium md:text-xl 3xl:text-5xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:text-light"
        >
          <h2 className="md:text-xl xl:text-4xl 3xl:text-5xl w-full text-left font-bold">
            {title}
          </h2>
        </Link>
        <p className="text-dark dark:text-light text-xs md:text-base 3xl:text-3xl 3xl:leading-[50px] font-medium 3xl:font-normal">
          {summary}
        </p>

        <div className="flex items-center justify-between gap-x-4">
          <Link href={github} target="_blank" className="w-7 md:w-10 3xl:w-20">
            <GithubIcon className="dark:fill-light" />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="py-2 px-4 md:px-6 3xl:py-6 3xl:px-12 font-semibold text-sm md:text-lg 3xl:text-3xl text-light dark:text-dark bg-dark dark:bg-light rounded-lg"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({
  type,
  link,
  title,
  img,
  github,
  className,
}: ProjectProps) => {
  return (
    <article
      className={`flex flex-col item-start justify-between gap-4 p-5 border border-dark dark:border-light rounded-2xl bg-light dark:bg-dark shadow-2xl cursor-pointer transform hover:${className} hover:transition-all hover:duration-500`}
    >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer rounded-lg overflow-hidden"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-110 transition-all duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="flex flex-col items-start justify-between gap-1 3xl:gap-2">
        <span className="font-medium text-primary dark:text-primaryDark capitalize md:text-xl 3xl:text-4xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full text-base md:text-xl xl:text-3xl 3xl:text-4xl font-bold 3xl:font-normal">
            {title}
          </h2>
        </Link>
        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="md:text-lg 3xl:text-3xl font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-7">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>DevDeen | Projects Page</title>
        <meta name="description" content="projects done by DevDeen" />
      </Head>
      <TransitionEffects />
      <main className="w-full flex flex-col items-center justify-center dark:text-light mb-10 lg:mb-20 3xl:mb-40">
        <Layout className="pt-8">
          <AnimatedText
            text="The mind surpasses the intellect!"
            className="!text-2xl 3xl:!text-7xl md:!text-4xl !text-center md:!w-full"
          />

          <div className="grid grid-cols-12 gap-x-0 gap-y-5 md:gap-x-10 md:gap-y-10 w-full mt-10">
            <div className="col-span-12 w-full perspective-1600">
              <FeaturedProject
                github="https://github.com/Abideen-program/jumia"
                img={Jumia}
                link="https://jummia-clone.netlify.app/"
                summary="A feature-rich Jumia Clone web App using React, Tailwind CSS, React-Redux, ReduxJs-toolkit React Router and Formik. It shows detail regarding naviagting the web app, from onboarding, to navigating the product section, adding products to cart, and setting delivery mode."
                title="Jumia Clone"
                type="Featured Project"
              />
            </div>

            <div className="col-span-12 md:col-span-6 perspective-1200">
              <Project
                github="https://github.com/Abideen-program/resturant"
                img={Fresh}
                link="https://freshalways.netlify.app/"
                title="Fresh Always"
                type="Resturant Template"
                className="-rotate-y-30"
              />
            </div>
            <div className="col-span-12 md:col-span-6 perspective-1200">
              <Project
                github="https://github.com/Abideen-program/Shoppy"
                img={Shoppy}
                link="https://abishoppy.netlify.app/"
                title="Shoppy"
                type="E-commerce Template"
                className="rotate-y-30"
              />
            </div>

            <div className="col-span-12 perspective-1600">
              <FeaturedProject
                github="https://github.com/Abideen-program/disney"
                img={Disney}
                link="https://mydisneyclone.netlify.app/home"
                summary="A feature-rich disney Clone web App using React, Styled Components, React-Redux, ReduxJs-toolkit React Router, Firebase, React Slick and Framer motion. It shows detail regarding naviagting the web app, from onboarding, to display movies under different category sections."
                title="Disney Clone"
                type="Featured Project"
              />
            </div>

            <div className="col-span-12 md:col-span-6 perspective-1600">
              <Project
                github="https://github.com/Abideen-program/BankGo"
                img={Bank}
                link="https://bankgo.netlify.app/"
                title="BankGo"
                type="Bank Account Template"
                className="rotate-x-30"
              />
            </div>
            <div className="col-span-12 md:col-span-6 perspective-1200">
              <Project
                github="https://github.com/Abideen-program/cocktail"
                img={Cocktail}
                link="https://cocktaildrink.netlify.app/"
                title="Cocktail Hour"
                type="Template Website"
                className="rotate-x-30"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
