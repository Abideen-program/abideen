import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { ProjectProps } from "@/types";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Feature1 from "../public/images/prop.webp";
import NFT from "../public/images/nft.webp";

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: ProjectProps) => {
  return (
    <article className="w-full flex items-center justify-between p-12 gap-6 rounded-3xl border border-dark bg-light shadow-2xl">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-[1.07] transition-all duration-300"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between gap-y-2 ">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="text-4xl w-full text-left font-bold">{title}</h2>
        </Link>
        <p className="text-dark font-medium">{summary}</p>

        <div className="flex items-center justify-between gap-x-4">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="py-2 px-6 font-semibold text-lg text-light bg-dark rounded-lg"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, link, title, img, github }: ProjectProps) => {
  return (
    <article className="flex flex-col item-start justify-between gap-4 p-5 border border-dark rounded-2xl bg-light shadow-2xl">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer rounded-lg overflow-hidden"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-110 transition-all duration-300"
        />
      </Link>

      <div className="flex flex-col items-start justify-between gap-1">
        <span className="font-medium text-primary capitalize text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
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
      <main className="w-full flex flex-col items-center justify-center border border-yellow-600">
        <Layout className="pt-16">
          <AnimatedText
            text="The mind surpasses the intellect!"
            className="!text-7xl"
          />

          <div className="grid grid-cols-12 gap-10 border border-red-700 w-full mt-10">
            <div className="col-span-12 w-full">
              <FeaturedProject
                github="/"
                img={Feature1}
                link="/"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                title="Jumia Clone"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6">
              <Project
                github="/"
                img={NFT}
                link="/"
                title="NFT collection"
                type="website template"
              />
            </div>
            <div className="col-span-6">
              <Project
                github="/"
                img={NFT}
                link="/"
                title="NFT collection"
                type="website template"
              />
            </div>

            {/* <div className="col-span-12 border border-green-600">
              Feature Projects
            </div> */}

            <div className="col-span-6 border">
              <Project
                github="/"
                img={NFT}
                link="/"
                title="NFT collection"
                type="website template"
              />
            </div>
            <div className="col-span-6 border">
              <Project
                github="/"
                img={NFT}
                link="/"
                title="NFT collection"
                type="website template"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;