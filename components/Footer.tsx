import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="border-t-2 border-dark dark:border-light w-full font-medium text-lg dark:text-light">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build with <span className="text-lg text-primary dark:text-primaryDark px-1">&#9825;</span>{" "}
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
