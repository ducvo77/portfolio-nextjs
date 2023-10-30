"use client";

import Logo from "./Logo";
import CustomLink from "./CustomLink";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from "../Icons";
import MotionTagA from "./MotionTagA";

export default function NavBar() {
  return (
    <header className="relative w-full px-32 py-8 font-medium flex items-center justify-between ">
      <nav className="flex gap-6">
        <CustomLink href={"/"} title="Home" />
        <CustomLink href={"/about"} title="About" />
        <CustomLink href={"/projects"} title="Projects" />
        <CustomLink href={"/articles"} title="Articles" />
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      <nav className="flex gap-8 items-center">
        <MotionTagA href={"/"} Icon={TwitterIcon} />
        <MotionTagA href={"/"} Icon={GithubIcon} />
        <MotionTagA href={"/"} Icon={LinkedinIcon} />
        <MotionTagA href={"/"} Icon={PinterestIcon} />
        <MotionTagA href={"/"} Icon={DribbbleIcon} />
      </nav>
    </header>
  );
}
