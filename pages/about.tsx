import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import DevDeen from "../public/images/devdeen.png";
import AnimateValue from "@/components/AnimateValue";
import Skills from "@/components/Skills";

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

      <main className="flex flex-col items-center justify-center">
        <Layout className="pt-8">
          <AnimatedText
            text="what's worth doing is worth doing well!"
            className="!text-7xl pb-8 !leading-[80px]"
          />

          <div className="grid w-full grid-cols-8 gap-16">
            <div className="flex flex-col items-start justify-start col-span-3">
              <h2 className="uppercase font-bold text-xl text-dark/75 mb-4">
                about me
              </h2>

              <p className="font-medium text-black/90">
                Hi, I'm DevDeen, a frontend developer with a passion for
                creating beautiful, functional, and user-centered digital
                experiences. With 3 years of experience in the field. I am
                always looking for new and innovative ways to bring my clients'
                visions to life. I want to change the world positively with a
                single line of code
              </p>

              <p className="my-4 font-medium text-black/90">
                I believe that design is about more than just making things look
                pretty - it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className="my-4 font-medium text-black/90">
                Whether I'm working on a website, or other digital product, I
                bring my commitment to design excellence and user-centered
                thinking to every project I work on. I look forward to the
                opportunity to bring my skills and passion to your next project.
              </p>
            </div>

            <div className="col-span-3 h-max z-10 relative">
              <div className="w-[102%] h-[103%] top-0 -right-3 bg-dark rounded-2xl absolute -z-10" />
              <div className="border-2 border-dark rounded-2xl p-6 bg-light">
                <Image
                  src={DevDeen}
                  alt="a picture of DevDeen"
                  className="w-full h-auto rounded-2xl relative"
                />
              </div>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="animate-bounce inline-block text-7xl font-bold">
                  <AnimateValue value={20} />+
                </span>
                <h2 className="capitalize font-medium text-xl text-dark/75">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="animate-bounce inline-block text-7xl font-bold">
                  <AnimateValue value={30} />+
                </span>
                <h2 className="capitalize font-medium text-xl text-dark/75">
                  completed projects
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="animate-bounce inline-block text-7xl font-bold">
                  <AnimateValue value={3} />+
                </span>
                <h2 className="capitalize font-medium text-xl text-dark/75">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;
