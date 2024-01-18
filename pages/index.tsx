import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProfilePic from "../public/images/pic-one.png";
import LightBulb from "../public/images/Lightbulb.svg";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { LinkArrow } from "@/components/Icons";
import Hireme from "@/components/Hireme";

const Home = () => {
  return (
    <>
      <Head>
        <title>DevDeen</title>
        <meta name="description" content="seasonal frontend developer" />
      </Head>
      <main className="flex items-center min-h-screen text-dark dark:text-light">
        <Layout className="md:pt-0">
          <div className="flex items-center justify-between w-full flex-col lg:flex-row">
            <div className="md:w-[50%] w-full">
              <Image
                width={0}
                height={0}
                src={ProfilePic}
                alt="DevDeen"
                className="w-full h-auto md:hidden lg:inline-block"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            <div className="flex flex-col items-center self-center 3xl:gap-4 lg:w-1/2 w-full z-10">
              <AnimatedText
                className="!text-2xl 3xl:!text-7xl md:!text-4xl !text-center lg:!text-left md:!w-full"
                text="Turning Vision Into Reality With Code And Design."
              />
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 3, duration: 0.5 },
                }}
                className="my-3 font-medium text-sm md:text-base 3xl:text-3xl 3xl:leading-[50px] lg:text-left text-center"
              >
                As a skilled frontend developer, I am dedicated to turning ideas
                into innovative web applications. Explore my latest projects,
                showcasing my expertise in React.js, Next.js and web
                development.
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 3, duration: 0.5 },
                }}
                className="flex items-center justify-center gap-4 3xl:text-5xl lg:self-start mt-2"
              >
                <Link
                  href="/abideen.pdf"
                  download={true}
                  target="_blank"
                  className="flex items-center justify-center p-2.5 px-6 bg-dark dark:bg-light text-light dark:text-dark rounded-lg font-semibold border-2 border-transparent hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light hover:border-dark dark:hover:border-light 3xl:p-8 3xl:text-5xl"
                >
                  Resume
                  <LinkArrow className="w-5 ml-2 3xl:w-12" />
                </Link>

                {/* <Link
                  href="mailto:olafimihana@gmail.com"
                  target="_blank"
                  className="flex items-center justify-center p-2.5 px-6 bg-[#BC5329] text-light rounded-lg font-semibold border-2 border-transparent hover:bg-light hover:text-[#BC5329] hover:border-[#BC5329] animate-bounce"
                >
                  Contact
                </Link> */}

                <Link
                  href="mailto:olafimihana@gmail.com"
                  target="_blank"
                  className="underline font-semibold animate-bounce hover:text-[#BC5329] 3xl:text-5xl"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </div>
        </Layout>

        <Hireme />

        <div className="w-24 absolute right-8 bottom-8 hidden md:inline-block">
          <Image src={LightBulb} alt="Light bulb" className="w-full" />
        </div>
      </main>
    </>
  );
};

export default Home;
//#BC5329
