import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import ProfilePic from "../public/images/pic-one.png";
import AnimatedText from "@/components/AnimatedText";

const Home = () => {
  return (
    <>
      <Head>
        <title>Devdeen</title>
        <meta name="description" content="seasonal frontend developer" />
      </Head>
      <main className="flex items-center min-h-screen text-dark">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-[45%]">
              <Image
                width={0}
                height={0}
                src={ProfilePic}
                alt="DevDeen"
                className="w-full h-auto"
                priority={true}
              />
            </div>

            <div className="w-[55%] flex flex-col items-center self-center">
              <AnimatedText className="!text-5xl !text-left" text="Turning Vision Into Reality With Code And Design." />
              <p>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Home;
