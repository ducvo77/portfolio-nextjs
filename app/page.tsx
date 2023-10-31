"use client";

import Image from "next/image";
import AnimatedText from "./components/Home/AnimatedText";
import Link from "next/link";
import { LinkIcon } from "./components/Icons";
import HireMe from "./components/HireMe";

export default function Home() {
  return (
    <>
      <div className="flex items-center">
        <div className="w-1/2">
          <Image
            src={"/images/developer-pic-1.webp"}
            alt="Avatar"
            width={592}
            height={592}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-6">
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className="!text-6xl text-left"
          />
          <p className="text-base font-medium">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="flex gap-10">
            <Link
              href="/pdf/cv.pdf"
              target="_blank"
              className="flex items-center gap-1 bg-dark text-light py-2 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-dark"
              // download={true}
            >
              <span>Resume</span>
              <LinkIcon className="!w-6" />
            </Link>
            <Link
              href="mailto:congductp1@gmail.com"
              target="_blank"
              className="flex items-center font-medium capitalize text-lg text-dark underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24 h-auto">
        <Image
          src={"/svg/miscellaneous_icons_1.svg"}
          alt="DucVo"
          width={100}
          height={100}
        />
      </div>
    </>
  );
}
