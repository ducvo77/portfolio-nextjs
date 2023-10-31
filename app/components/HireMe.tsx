import Link from "next/link";
import { CircularIcon } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularIcon className="fill-dark font-bold animate-spin-slow duration-200" />
        <Link
          href="mailto:congductp1@gmail.com"
          className="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark rounded-full text-light flex justify-center items-center text-center font-semibold shadow-md border border-dark hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
