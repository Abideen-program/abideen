import Image from "next/image";
import CircleImage from "../public/images/certified.png";
import Link from "next/link";

const Hireme = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center ">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <Image
          //   width={500}
          //   height={500}
          src={CircleImage}
          alt="Certified Developer"
          className="animate-spin-slow"
        />

        <Link
          href="mailto: olafimihana@gmail.com"
          className="w-[60px] h-[60px] border-2 border-transparent bg-dark text-light absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full shadow-md hover:bg-light hover:text-dark hover:border-dark"
        >
          <p className="text-xs font-semibold">Hire me</p>
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
