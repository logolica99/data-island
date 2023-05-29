import Link from "next/link";
import React from "react";

export default function Menu({ open }: { open: boolean }) {
  return (
    <div
      className={`fixed left-0  top-0 mt-[10vh] h-[100vh] w-full bg-white transition duration-150 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className=" flex flex-col items-center justify-center gap-8 mt-16">
        <Link
          href={""}
          className="text-medium font-medium transition duration-150 ease-in-out hover:opacity-70 "
        >
          SERVICES
        </Link>
        <Link
          href={""}
          className="text-medium font-medium transition duration-150 ease-in-out hover:opacity-70 "
        >
          PRICING
        </Link>
        <Link
          href={""}
          className="text-medium font-medium transition duration-150 ease-in-out hover:opacity-70 "
        >
          CASE STUDIES
        </Link>
        <Link
          href={""}
          className="text-medium font-medium transition duration-150 ease-in-out hover:opacity-70 "
        >
          BLOG
        </Link>
        <Link
          href={""}
          className="text-medium font-medium transition duration-150 ease-in-out hover:opacity-70 "
        >
          ABOUT US
        </Link>
        <Link
          href={""}
          className="rounded-full bg-primaryBlue px-8 py-2 text-medium font-bold text-white transition duration-150 ease-in-out hover:opacity-70 "
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
}
