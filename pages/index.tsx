import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProfilePic from "../public/images/pic-one.png";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { LinkArrow } from "@/components/Icons";

const Home = () => {
  return (
    <>
      <Head>
        <title>DevDeen</title>
        <meta name="description" content="seasonal frontend developer" />
      </Head>
      <main className="flex items-center min-h-screen text-dark">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-[50%]">
              <Image
                width={0}
                height={0}
                src={ProfilePic}
                alt="DevDeen"
                className="w-full h-auto"
                priority={true}
              />
            </div>

            <div className="w-[50%] flex flex-col items-center self-center">
              <AnimatedText
                className="!text-5xl !text-left"
                text="Turning Vision Into Reality With Code And Design."
              />
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 3, duration: 0.5 },
                }}
                className="my-3 font-medium"
              >
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 3, duration: 0.5 },
                }}
                className="flex items-center justify-center gap-4 self-start mt-2"
              >
                <Link
                  href="/abideen.pdf"
                  download={true}
                  target="_blank"
                  className="flex items-center justify-center p-2.5 px-6 bg-dark text-light rounded-lg font-semibold border-2 border-transparent hover:bg-light hover:text-dark hover:border-dark"
                >
                  Resume
                  <LinkArrow className='w-5 ml-2'/>
                </Link>

                <Link
                  href="mailto:olafimihana@gmail.com"
                  target="_blank"
                  className="flex items-center justify-center p-2.5 px-6 bg-[#BC5329] text-light rounded-lg font-semibold border-2 border-transparent hover:bg-light hover:text-[#BC5329] hover:border-[#BC5329]"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Home;
//#BC5329
