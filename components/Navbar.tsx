import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedIn, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className }: CustomLink) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1.5px] bg-dark inline-block w-0 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300 ease-linear ${
          asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="px-32 py-8 flex items-center justify-between font-medium">
      <nav className="">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="ml-4" />
      </nav>

      <ul className="flex items-center justify-center gap-5">
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="https://twitter.com/Olafimihanabid"
          target="_blank"
        >
          <li className="w-6">
            <TwitterIcon />
          </li>
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/Abideen-program"
          target="_blank"
        >
          <li className="w-6">
            <GithubIcon />
          </li>
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/olafimihan-abideen/"
          target="_blank"
        >
          <li className="w-6">
            <LinkedIn />
          </li>
        </motion.a>
        <Link href="/" target="_blank">
          <li>{/* <LightDarkIcon /> */}</li>
        </Link>
      </ul>
      <div className="absolute left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
