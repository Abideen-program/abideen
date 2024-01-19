import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="border-t-2 border-dark dark:border-light w-full font-medium dark:text-light 3xl:text-4xl">
      <Layout className="!p-8 lg:!px-32 flex flex-col items-center justify-between lg:flex-row gap-3 lg:gap-0">
        <span className="md:text-lg 3xl:text-4xl">{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build with <span className="md:text-lg 3xl:text-6xl text-primary dark:text-primaryDark px-1">&#9825;</span>{" "}
          <Link href="/" className="underline underline-offset-2">
            DevDeen
          </Link>
        </div>
        <Link href="/">Say hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
