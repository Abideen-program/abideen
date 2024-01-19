import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import DevDeen from "../public/images/devdeen.png";
import AnimateValue from "@/components/AnimateValue";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const about = () => {
  return (
    <>
      <Head>
        <title>DevDeen | About Page</title>
        <meta
          name="description"
          content="Experience and Education details about Abideen"
        />
      </Head>

      <main className="flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-8">
          <AnimatedText
            text="what's worth doing is worth doing well!"
            className="pb-8 md:!leading-[60px] !text-2xl 3xl:!text-7xl md:!text-[44px]"
          />

          <div className="grid w-full grid-cols-8 gap-8 lg:gap-16">
            <div className="flex flex-col items-start justify-start col-span-8 md:col-span-4 lg:col-span-3 xl:col-span-4 3xl:col-span-3 order-2 md:order-1">
              <h2 className="uppercase font-bold text-xl 3xl:text-4xl text-dark/75 dark:text-light/75 mb-4">
                about me
              </h2>

              <p className="font-medium text-sm md:text-sm 3xl:text-3xl 3xl:leading-[50px] text-black/90 dark:text-light/90">
                Hi, I'm DevDeen, a frontend developer with a passion for
                creating beautiful, functional, and user-centered digital
                experiences. With 3 years of experience in the field. I am
                always looking for new and innovative ways to bring my clients'
                visions to life. I want to change the world positively with a
                single line of code
              </p>

              <p className="my-4 font-medium text-sm md:text-sm 3xl:text-3xl 3xl:leading-[50px] text-black/90 dark:text-light/90">
                I believe that design is about more than just making things look
                pretty - it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className="my-4 font-medium text-sm md:text-sm 3xl:text-3xl 3xl:leading-[50px] text-black/90 dark:text-light/90">
                Whether I'm working on a website, or other digital product, I
                bring my commitment to design excellence and user-centered
                thinking to every project I work on. I look forward to the
                opportunity to bring my skills and passion to your next project.
              </p>
            </div>

            <div className="col-span-8 md:col-span-4 lg:col-span-3 xl:col-span-4 3xl:col-span-3 h-max z-10 relative order-1 md:order-2">
              <div className="w-[102%] h-[103%] top-0 -right-3 bg-dark dark:bg-light rounded-2xl absolute -z-10" />
              <div className="border-2 border-dark dark:border-light rounded-2xl p-6 bg-light dark:bg-dark">
                <Image
                  src={DevDeen}
                  alt="a picture of DevDeen"
                  className="w-full h-auto rounded-2xl relative"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            <div className="col-span-8 3xl:col-span-2 flex 3xl:flex-col 3xl:items-end justify-between order-3">
              <div className="flex flex-col items-center 3xl:items-end justify-center">
                <span className="animate-bounce inline-block text-3xl md:text-4xl lg:text-6xl 3xl:text-7xl font-bold">
                  <AnimateValue value={20} />+
                </span>
                <h2 className="capitalize font-medium text-center 3xl:text-left text-sm lg:text-xl 3xl:text-3xl text-dark/75 dark:text-light/75">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-center 3xl:items-end justify-center">
                <span className="animate-bounce inline-block text-3xl md:text-4xl lg:text-6xl 3xl:text-7xl font-bold">
                  <AnimateValue value={30} />+
                </span>
                <h2 className="capitalize font-medium text-center 3xl:text-left text-sm lg:text-xl 3xl:text-3xl text-dark/75 dark:text-light/75">
                  completed projects
                </h2>
              </div>

              <div className="flex flex-col items-center 3xl:items-end justify-center">
                <span className="animate-bounce inline-block text-3xl md:text-4xl lg:text-6xl 3xl:text-7xl font-bold">
                  <AnimateValue value={3} />+
                </span>
                <h2 className="capitalize font-medium text-center 3xl:text-left text-sm lg:text-xl 3xl:text-3xl text-dark/75 dark:text-light/75">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
