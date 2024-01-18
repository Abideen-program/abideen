import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedIn, MoonIcon, SunIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";
import { CustomLinkProps } from "@/types";
import useThemeSwitcher from "./hook/useThemeSwitcher";

const CustomLink = ({ href, title, className }: CustomLinkProps) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1.5px] bg-dark dark:bg-light inline-block w-0 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300 ease-linear ${
          asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const { mode, setMode } = useThemeSwitcher();

  return (
    <header className="px-32 py-8 flex items-center justify-between font-medium dark:text-light">
      <button className="flex flex-col items-center justify-center gap-1">
        <span className="bg-dark dark:bg-light h-0.5 w-6 rounded-sm"></span>
        <span className="bg-dark dark:bg-light h-0.5 w-6 rounded-sm"></span>
        <span className="bg-dark dark:bg-light h-0.5 w-6 rounded-sm"></span>
      </button>

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

        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setMode(mode === "dark" ? "light" : "dark");
          }}
          className={`border border-dark p-1 flex items-center justify-center rounded-full ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </motion.button>
      </ul>
      <div className="absolute left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
