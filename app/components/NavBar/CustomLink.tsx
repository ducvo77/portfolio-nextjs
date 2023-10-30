"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface CustomLinkProps {
  href: string;
  title: string;
}

export default function CustomLink({ href, title }: CustomLinkProps) {
  const pathname = usePathname();

  return (
    <Link href={href} className="relative group">
      <h3>{title}</h3>
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          href === pathname ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
}
