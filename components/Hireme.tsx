import { Cirlce, CirleIcon } from "./Icons";
import Link from "next/link";

const Hireme = () => {
  return (
    <div className="fixed lg:left-4 lg:bottom-10 3xl:bottom-20 lg:top-auto top-1 right-0 lg:right-auto flex items-center justify-center overflow-hidden">
      <div className="w-20 lg:w-48 h-auto flex items-center justify-center relative ">
        {/* <Cirlce className={`animate-spin-slow fill-dark dark:fill-light`} /> */}
        <CirleIcon className={`animate-spin-slow fill-dark dark:fill-light`} />

        <Link
          href="mailto: olafimihana@gmail.com"
          className="w-10 h-10 lg:w-[60px] lg:h-[60px] border-2 border-transparent bg-dark dark:bg-light text-light dark:text-dark absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full shadow-md hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light hover:border-dark dark:hover:border-light dark:border-light"
        >
          <p className="lg:text-xs text-[8px] font-semibold">Hire me</p>
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
