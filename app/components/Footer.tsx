import Link from "next/link";
import MainLayout from "./MainLayout";

const Footer = () => {
  return (
    <footer className="border-t-[2px] border-dark w-full font-medium text-lg">
      <MainLayout className="items-center justify-between w-full py-8">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-baseline">
          <span>
            Built with <span className="text-primary text-2xl">&#9825;</span> by
            &nbsp;
          </span>
          <Link href={"/"} className="underline underline-offset-2">
            DucVo
          </Link>
        </div>
        <span>Hello</span>
      </MainLayout>
    </footer>
  );
};

export default Footer;
